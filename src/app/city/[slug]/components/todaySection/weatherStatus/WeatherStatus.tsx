import { FaWind } from 'react-icons/fa';
import { BsDropletFill } from 'react-icons/bs';
import styles from './WeatherStatus.module.css';
import { CurrentWeather } from '../../../../../../../types';

function WeatherStatus({ data }: { data: CurrentWeather }) {
  return (
    <div className={styles.weather_status}>
      <div className={styles.left}>
        <h1 className={styles.name}>
          {data.name}, {data.sys.country}
        </h1>
        <h1 className={styles.temp}>{Math.round(data.main.temp)}°c</h1>
      </div>
      <div className={styles.right}>
        <p className="bold">{data.weather[0].description}</p>
        <p className={styles.max_min}>
          feels like &nbsp;
          <span className="bold">{` ${Math.round(
            data.main.feels_like,
          )}°`}</span>
        </p>
        <p>
          <BsDropletFill />
          &nbsp;
          <span className="bold">{data.main.humidity}</span>
          &nbsp; %
        </p>
        <p>
          <FaWind />
          &nbsp;
          <span className="bold">{Math.round(data.wind.speed)}</span>
          &nbsp; kmh
        </p>
      </div>
    </div>
  );
}
export default WeatherStatus;
