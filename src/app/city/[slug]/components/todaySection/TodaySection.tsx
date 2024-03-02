import DayHours from './dayHours/DayHours';
import WeatherStatus from './weatherStatus/WeatherStatus';
import styles from './TodaySection.module.css';

const TodaySection = ({ currentWeather, hoursForcast }: any) => {
  return (
    <section className="today">
      <div className={`${styles.today_inner} ${styles.today_inner1}`}>
        <WeatherStatus data={currentWeather} />
      </div>
      <div className={`${styles.today_inner} ${styles.today_inner2}`}>
        <p>24-Hour forcast:</p>
        <DayHours data={hoursForcast} />
      </div>
    </section>
  );
};

export default TodaySection;
