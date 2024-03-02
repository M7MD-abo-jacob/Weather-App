import DayHour from './DayHour';
import styles from './DayHours.module.css';

function DayHours({ data }: any) {
  return (
    <div className={styles.DayHours}>
      {data.map((hour) => {
        return <DayHour data={hour} key={hour.time} />;
      })}
    </div>
  );
}

export default DayHours;
