// this function gets the data from the api caller and formats it
// it returns the weather data for the next 12 hours, 5 days, current weather at the moment, and a small string to change the dynamic weather easily
import {
  CurrentWeather,
  DayForcast,
  ForecastData,
  HoursForcast,
  WeatherData,
} from '@/types';

export default function formatWeatherData({
  forcastData,
  weatherData,
}: {
  forcastData: ForecastData;
  weatherData: WeatherData;
}) {
  const list = forcastData.list;
  const daysForcast: DayForcast[] = [];
  const dts: string[] = [];

  // loop over data and get heighest and lowest for each day
  for (let i = 0; i < list.length; i++) {
    if (dts.includes(list[i].dt_txt.split(' ')[0])) {
      //chech if date exists
      if (
        list[i].main.temp_max >= daysForcast[daysForcast.length - 1].temp_max
      ) {
        //add temp min and max if day exists and skips the rest of data
        daysForcast[daysForcast.length - 1].temp_max = Math.floor(
          list[i].main.temp_max,
        );
        daysForcast[
          daysForcast.length - 1
        ].icon1 = `https://openweathermap.org/img/wn/${list[i].weather[0].icon}.png`;
      }
      if (
        list[i].main.temp_min <= daysForcast[daysForcast.length - 1].temp_min
      ) {
        daysForcast[daysForcast.length - 1].temp_min = Math.floor(
          list[i].main.temp_min,
        );
        daysForcast[
          daysForcast.length - 1
        ].icon2 = `https://openweathermap.org/img/wn/${list[i].weather[0].icon}.png`;
      }
      continue;
    } else {
      let day: DayForcast = {
        date: '',
        temp_max: 100,
        temp_min: 0,
        status: '',
        icon1: '',
        icon2: '',
      }; // make day first time
      dts.push(list[i].dt_txt.split(' ')[0]); //if new date, add data
      day.date = list[i].dt_txt.split(' ')[0];
      day.temp_max = Math.floor(list[i].main.temp_max);
      day.temp_min = Math.floor(list[i].main.temp_min);
      day.status = list[i].weather[0].main;
      day.icon1 = `https://openweathermap.org/img/wn/${list[i].weather[0].icon}.png`;
      day.icon2 = `https://openweathermap.org/img/wn/${list[i].weather[0].icon}.png`;
      daysForcast.push(day);
    }
  }

  //   loop over the first day of the forcast data and return 12hours weather data
  let hoursForcast: HoursForcast[] = [];
  for (let i = 0; i < 8; i++) {
    let dayHour: HoursForcast = {
      time: '',
      status: '',
      icon: '',
      temp: '',
      humidity: 0,
    };
    let date = new Date(list[i].dt_txt); // turn timestamp to date
    let hours = date.getHours() % 12;
    hours = hours ? hours : 12; // turn hour '0' into '12'
    var ampm = hours >= 12 ? 'PM' : 'AM';
    let timeStr = `${hours} ${ampm}`; // string ex: "12 pm"
    dayHour.time = timeStr;
    dayHour.status = list[i].weather[0].main; // string status at the moment
    dayHour.temp = list[i].main.temp.toFixed(); // temp at the moment
    dayHour.humidity = list[i].main.humidity; // humidity
    dayHour.icon = `https://openweathermap.org/img/wn/${list[i].weather[0].icon}.png`; // icon
    hoursForcast.push(dayHour);
  }

  const data: {
    hoursForcast: HoursForcast[];
    daysForcast: DayForcast[];
    currentWeather: CurrentWeather;
    status: string;
  } = {
    hoursForcast: hoursForcast,
    daysForcast: daysForcast,
    currentWeather: weatherData,
    status: weatherData.weather[0].icon,
  };

  return data;
}
