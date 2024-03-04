import Image from 'next/image';
import { HoursForcast } from '@/types';
import styles from './DayHour.module.css';
import { BsDropletFill } from 'react-icons/bs';

function DayHour({ data }: { data: HoursForcast }) {
  return (
    <li className={styles.hour}>
      <div>
        <p>{data.time}</p>
        <Image src={data.icon} alt={data.status} width={30} height={30} />
        <p>
          {data.temp}
          <span aria-label="degrees celsius at the morning">°</span>
        </p>
        <p>
          <span aria-label="humidity">
            <BsDropletFill />
          </span>{' '}
          {data.humidity}
          <span aria-label="percent">%</span>
        </p>
      </div>
    </li>
  );
}

export default DayHour;
