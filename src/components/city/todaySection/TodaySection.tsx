import DayHours from './dayHours/DayHours';
import WeatherStatus from './weatherStatus/WeatherStatus';
import styles from './TodaySection.module.css';
import { CurrentWeather, HoursForcast } from '@/types';

const TodaySection = ({
  currentWeather,
  hoursForcast,
}: {
  currentWeather: CurrentWeather;
  hoursForcast: HoursForcast[];
}) => {
  return (
    <section className="today">
      <div className={`${styles.today_inner} ${styles.today_inner1}`}>
        <WeatherStatus data={currentWeather} />
      </div>
      <div className={`${styles.today_inner} ${styles.today_inner2}`}>
        <h2>24-Hour forcast:</h2>
        <DayHours data={hoursForcast} />
      </div>
    </section>
  );
};

export default TodaySection;
