export type CustomStyles = React.CSSProperties & { [key: string]: string };

export type SearchResult = {
  value: string;
  label: string;
};

export type City = {
  country: string;
  country_code: string;
  state: string;
  city: string;
  formatted: string;
};

export type HoursForcast = {
  time: string;
  status: string;
  icon: string;
  temp: string;
  humidity: number;
};

export type DayForcast = {
  date: string;
  temp_max: number;
  temp_min: number;
  status: string;
  icon1: string;
  icon2: string;
};

export type CurrentWeather = {
  id: number;
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: { speed: number };
  weather: [{ id: number; main: string; description: string; icon: string }];
  clouds: { all: number };
  visibility: number;
};

export type WeatherData = {
  weather: [{ id: int; main: string; description: string; icon: string }];
  visibility: number;
  wind: { speed: number };
  clouds: { all: number };
  dt: number;
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
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type ForecastData = {
  cnt: number;
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
  city: {
    id: number;
    name: string;
    country: string;
    sunrise: number;
    sunset: number;
  };
};
