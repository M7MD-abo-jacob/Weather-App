import { HoursForcast } from '@/types';
import DayHour from './DayHour';
import styles from './DayHours.module.css';

function DayHours({ data }: { data: HoursForcast[] }) {
  return (
    <ul className={styles.DayHours}>
      {data.map((hour: HoursForcast) => {
        return <DayHour data={hour} key={hour.time} />;
      })}
    </ul>
  );
}

export default DayHours;
