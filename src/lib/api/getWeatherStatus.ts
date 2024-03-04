'use server';
// this function runs on the server to secure the api key
// it calls the api endpoints and passes the data to another function to format it
import axios from 'axios';
import formatWeatherData from '../formatWeatherData';

export default async function getWeatherStatus(slug: string) {
  const BASE_URL = new URL('https://api.openweathermap.org/data/2.5/');
  let newSlug = decodeURIComponent(slug);

  // sooo, openweathermap api is weird
  // it needs "city, state, country": "New York, NY, US"
  // cities api returns "Damascus, SY" for some countries that don't have states!
  // and i need to send something like "new york,ny+us"
  // so something like "damascus,+sy" works somehow!!!
  // that's my solution, got a better one?? :)
  if (!slug.includes(',')) {
    newSlug = slug.replace('+', ',+');
  }
  const apiKey = process.env.APP_ID || '';

  // gets the current weather of a city
  let hoursUrl = new URL('weather', BASE_URL);
  hoursUrl.searchParams.set('appid', apiKey);
  hoursUrl.searchParams.set('units', 'metric');
  hoursUrl.searchParams.set('q', newSlug);

  // gets 5 days forecast
  let daysUrl = new URL('forecast', BASE_URL);
  daysUrl.searchParams.set('appid', apiKey);
  daysUrl.searchParams.set('units', 'metric');
  daysUrl.searchParams.set('q', newSlug);

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
    // error is handled in the error.ts file!
    console.log('error', error);
  }

  return formatWeatherData({ forcastData, weatherData });
}
