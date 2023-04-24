import axios from "axios";

export default async function getWeatherStatus(slug) {
  const BASE_URL = new URL("https://api.openweathermap.org/data/2.5/");

  // gets the current weather of a city
  let hoursUrl = new URL("weather", BASE_URL);
  hoursUrl.searchParams.set("appid", process.env.APP_ID);
  hoursUrl.searchParams.set("units", "metric");
  // hoursUrl.searchParams.set("q", slug); // didn't work with api
  hoursUrl += `&q=${slug}`;

  // gets 5 days weather
  let daysUrl = new URL("forecast", BASE_URL);
  daysUrl.searchParams.set("appid", process.env.APP_ID);
  daysUrl.searchParams.set("units", "metric");
  // daysUrl.searchParams.set("q", slug); // didn't work with api
  daysUrl += `&q=${slug}`;

  const [weatherResponse, forcastResponse] = await Promise.all([
    axios.get(hoursUrl),
    axios.get(daysUrl),
  ]);

  const weatherData = weatherResponse.data;
  const forcastData = forcastResponse.data;

  const days = [];
  const dts = [];
  const list = forcastData.list;

  // getting heighest and lowest for each day
  for (let i = 0; i < list.length; i++) {
    if (dts.includes(list[i].dt_txt.split(" ")[0])) {
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
      let day = {}; // make day first time
      dts.push(list[i].dt_txt.split(" ")[0]); //if new date, add data
      day.date = list[i].dt_txt.split(" ")[0];
      day.temp_max = list[i].main.temp_max.toFixed();
      day.temp_min = list[i].main.temp_min.toFixed();
      day.status = list[i].weather[0].main;
      day.icon1 = `http://openweathermap.org/img/wn/${list[i].weather[0].icon}.png`;
      day.icon2 = `http://openweathermap.org/img/wn/${list[i].weather[0].icon}.png`;
      days.push(day);
    }
  }

  const dayHours = [];
  for (let i = 0; i < 8; i++) {
    let dayHour = {};
    let date = new Date(list[i].dt_txt);
    let hours = date.getHours();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    let strTime = hours + " " + ampm;
    dayHour.time = strTime;
    dayHour.status = list[i].weather[0].main;
    dayHour.icon = `http://openweathermap.org/img/wn/${list[i].weather[0].icon}.png`;
    dayHour.temp = list[i].main.temp.toFixed();
    dayHour.humidity = list[i].main.humidity;
    dayHours.push(dayHour);
  }

  const data = {
    hoursForcast: dayHours,
    daysForcast: days,
    currentWeather: weatherData,
    setStatus: weatherData.weather[0].icon,
  };

  return { ...data };
}
