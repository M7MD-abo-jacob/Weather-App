'use server';

import axios from 'axios';
import { CurrentWeather, DaysForcast, HoursForcast } from '../../types';

export default async function getWeatherStatus(slug: string) {
  const BASE_URL = new URL('https://api.openweathermap.org/data/2.5/');
  let newSlug = decodeURIComponent(slug);
  console.log('get weather func slug: ', newSlug);
  if (!slug.includes(',')) {
    newSlug = slug.replace('+', ',+');
  }

  const apiKey = process.env.APP_ID || '';
  // gets the current weather of a city
  let hoursUrl = new URL('weather', BASE_URL);
  hoursUrl.searchParams.set('appid', apiKey);
  hoursUrl.searchParams.set('units', 'metric');
  hoursUrl.searchParams.set('q', newSlug); // didn't work with api
  // hoursUrl += `&q=${newSlug}`;
  // TODO: comments
  // gets 5 days weather
  let daysUrl = new URL('forecast', BASE_URL);
  daysUrl.searchParams.set('appid', apiKey);
  daysUrl.searchParams.set('units', 'metric');
  daysUrl.searchParams.set('q', newSlug); // didn't work with api
  // daysUrl += `&q=${newSlug}`;

  const [weatherResponse, forcastResponse] = await Promise.all([
    axios.get(hoursUrl.toString()),
    axios.get(daysUrl.toString()),
  ]);
  let weatherData;
  let forcastData;
  try {
    weatherData = weatherResponse.data;
    forcastData = forcastResponse.data;
  } catch (error) {
    console.log('error', error);
  }

  interface Day {
    date: any;
    temp_max: any;
    temp_min: any;
    status: any;
    icon1: any;
    icon2: any;
  }

  const days: Day[] = [];
  const dts: any[] = [];
  const list = forcastData.list;

  // getting heighest and lowest for each day
  for (let i = 0; i < list.length; i++) {
    if (dts.includes(list[i].dt_txt.split(' ')[0])) {
      //chech if date exists
      if (list[i].main.temp_max >= days[days.length - 1].temp_max) {
        //add temp min and max if day exists and skips the rest of data
        days[days.length - 1].temp_max = list[i].main.temp_max.toFixed();
        days[
          days.length - 1
        ].icon1 = `http://openweathermap.org/img/wn/${list[i].weather[0].icon}.png`;
      }
      if (list[i].main.temp_min <= days[days.length - 1].temp_min) {
        days[days.length - 1].temp_min = list[i].main.temp_min.toFixed();
        days[
          days.length - 1
        ].icon2 = `http://openweathermap.org/img/wn/${list[i].weather[0].icon}.png`;
      }
      continue;
    } else {
      let day: Day = {
        date: '',
        temp_max: '',
        temp_min: '',
        status: '',
        icon1: '',
        icon2: '',
      }; // make day first time
      dts.push(list[i].dt_txt.split(' ')[0]); //if new date, add data
      day.date = list[i].dt_txt.split(' ')[0];
      day.temp_max = list[i].main.temp_max.toFixed();
      day.temp_min = list[i].main.temp_min.toFixed();
      day.status = list[i].weather[0].main;
      day.icon1 = `http://openweathermap.org/img/wn/${list[i].weather[0].icon}.png`;
      day.icon2 = `http://openweathermap.org/img/wn/${list[i].weather[0].icon}.png`;
      days.push(day);
    }
  }

  const dayHours: DaysForcast[] = [];
  for (let i = 0; i < 8; i++) {
    let dayHour: any = {};
    let date = new Date(list[i].dt_txt);
    let hours = date.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    let strTime = hours + ' ' + ampm;
    dayHour.time = strTime;
    dayHour.status = list[i].weather[0].main;
    dayHour.icon = `http://openweathermap.org/img/wn/${list[i].weather[0].icon}.png`;
    dayHour.temp = list[i].main.temp.toFixed();
    dayHour.humidity = list[i].main.humidity;
    dayHours.push(dayHour);
  }

  const data: {
    hoursForcast: HoursForcast[];
    daysForcast: DaysForcast[];
    currentWeather: CurrentWeather;
    setStatus: string;
  } = {
    hoursForcast: dayHours,
    daysForcast: days,
    currentWeather: weatherData,
    setStatus: weatherData.weather[0].icon,
  };

  return { ...data };
}
