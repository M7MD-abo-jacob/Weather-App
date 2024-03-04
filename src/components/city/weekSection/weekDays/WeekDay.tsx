import Image from 'next/image';
import { DayForcast } from '@/types';
import styles from './WeekDay.module.css';

function WeekDay({ data }: { data: DayForcast }) {
  const date = new Date(data.date);

  const day = Intl.DateTimeFormat('en', {
    weekday: 'short',
    day: 'numeric',
    month: 'numeric',
  }).format(date);

  // for screen readers: ex: Friday, March 11
  const dayStr = Intl.DateTimeFormat('en', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
  }).format(date);

  return (
    <li className={styles.day}>
      <p className={styles.day_name} aria-label={dayStr}>
        {day}
      </p>
      <p className={styles.day_temp}>
        {data.temp_max}
        <span aria-label="degrees celsius at daytime">°</span>
        <span aria-label="and">/</span>
        {data.temp_min}
        <span aria-label="degrees celsius at night">°</span>
      </p>
      <div className={styles.day_status}>
        <Image
          src={data.icon1}
          alt={`${data.status} at daytime`}
          width={30}
          height={30}
        />
        <Image
          src={data.icon2}
          alt={`${data.status} at night`}
          width={30}
          height={30}
        />
      </div>
    </li>
  );
}

export default WeekDay;
