import { Url } from 'url';

export type City = {
  country: string;
  country_code: string;
  state: string;
  city: string;
  formatted: string;
};

export type HoursForcast =
  | {
      time: string;
      status: string;
      icon: Url;
      temp: string;
      humidity: number;
    }
  | {};
export type DaysForcast =
  | {
      date: string;
      temp_max: string;
      temp_min: string;
      status: string;
      icon1: Url;
      icon2: Url;
    }
  | {};
export type CurrentWeather = {
  id: 170654;
  name: 'Damascus';
  sys: {
    country: 'SY';
    sunrise: 1709352116;
    sunset: 1709393536;
  };
  main: {
    temp: 19.42;
    feels_like: 17.97;
    humidity: 21;
  };
  wind: { speed: 2.57 };
  weather: [{ id: 800; main: 'Clear'; description: 'clear sky'; icon: '01d' }];
  visibility: 10000;
  clouds: { all: 0 };
};

export type WeatherData = {
  // weather: [ { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' } ],
  weather: [{ id: int; main: string; description: string; icon: string }];
  // main: {
  //   temp: 19.42,
  //   feels_like: 17.94,
  //   temp_min: 19.42,
  //   temp_max: 19.42,
  //   pressure: 1013,
  //   humidity: 20,
  //   sea_level: 1013,
  //   grnd_level: 933
  // },
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  // visibility: 10000,
  visibility: number;
  // wind: { speed: 2.14, deg: 165, gust: 2.59 },
  wind: { speed: number };
  // clouds: { all: 0 },
  clouds: { all: number };
  // dt: 1709378965,
  dt: number;
  // sys: {
  //   type: 1,
  //   id: 7605,
  //   country: 'SY',
  //   sunrise: 1709352116,
  //   sunset: 1709393536
  // },
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  // timezone: 10800,
  // id: 170654,
  // name: 'Damascus',
  // cod: 200
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type ForecastData = {
  // cnt: 40;
  cnt: number;
  // list: [
  //   {
  //     dt: 1709380800,
  //     main: {
  //       temp: 19.42,
  //       feels_like: 17.97,
  //       temp_min: 18.53,
  //       temp_max: 19.42,
  //       pressure: 1012,
  //       sea_level: 1012,
  //       grnd_level: 933,
  //       humidity: 21,
  //       temp_kf: 0.89
  //     },
  //     weather: [ { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' } ],
  //     clouds: { all: 0 },
  //     wind: { speed: 2.1, deg: 185, gust: 3.3 },
  //     visibility: 10000,
  //     pop: 0,
  //     sys: { pod: 'd' },
  //     dt_txt: '2024-03-02 12:00:00'
  //   }
  // ];
  list: [
    {
      dt: number;
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
      };
      weather: [
        { id: number; main: string; description: string; icon: string },
      ];
      clouds: { all: number };
      wind: { speed: number };
      visibility: number;
      dt_txt: string;
    },
  ];
  // city: {
  //   id: 170654;
  //   name: 'Damascus';
  //   coord: { lat: 33.5102; lon: 36.2913 };
  //   country: 'SY';
  //   population: 1569394;
  //   timezone: 10800;
  //   sunrise: 1709352116;
  //   sunset: 1709393536;
  // };
  city: {
    id: number;
    name: string;
    country: string;
    sunrise: number;
    sunset: number;
  };
};
