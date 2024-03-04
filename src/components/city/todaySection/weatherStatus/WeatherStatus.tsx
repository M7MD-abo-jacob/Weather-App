import { FaWind } from 'react-icons/fa';
import { BsDropletFill } from 'react-icons/bs';
import { CurrentWeather } from '@/types';
import styles from './WeatherStatus.module.css';

function WeatherStatus({ data }: { data: CurrentWeather }) {
  console.log('data.sys.country', data.sys.country);
  return (
    <article className={styles.weather_status}>
      <div className={styles.left}>
        <h2 className={styles.name}>
          {data.name}, {data.sys.country}
        </h2>
        <h3 className={styles.temp}>
          {Math.round(data.main.temp)}
          <span aria-label="degrees celsius">°c</span>
        </h3>
      </div>
      <div className={styles.right}>
        <p className="bold">{data.weather[0].description}</p>
        <p className={styles.max_min}>
          feels like &nbsp;
          <span className="bold">
            {Math.round(data.main.feels_like)}
            <span aria-label="degrees celsius">°</span>
          </span>
        </p>
        <p>
          <span aria-label="humidity">
            <BsDropletFill />
          </span>
          &nbsp;
          <span className="bold">{data.main.humidity}</span>
          &nbsp; <span aria-label="percent">%</span>
        </p>
        <p>
          <span aria-label="wind speed">
            <FaWind />
          </span>
          &nbsp;
          <span className="bold">{Math.round(data.wind.speed)}</span>
          &nbsp;
          <span aria-label="kilometers per hour">kmh</span>
        </p>
      </div>
    </article>
  );
}
export default WeatherStatus;
