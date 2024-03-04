import { DayForcast } from '@/types';
import styles from './WeekDay.module.css';

function WeekDay({ data }: { data: DayForcast }) {
  const date = new Date(data.date);

  const day = Intl.DateTimeFormat('en', {
    weekday: 'short',
    day: 'numeric',
    month: 'numeric',
  }).format(date);

  return (
    <li className={styles.day}>
      <p className={styles.day_name}>{day}</p>
      <p className={styles.day_temp}>
        {data.temp_max}°/{data.temp_min}°
      </p>
      <div className={styles.day_status}>
        <img src={data.icon1} alt={'day time'} />{' '}
        <img src={data.icon2} alt={'night time'} />
      </div>
    </li>
  );
}

export default WeekDay;
