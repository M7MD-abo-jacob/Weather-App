import Image from 'next/image';
import { HoursForcast } from '@/types';
import styles from './DayHour.module.css';
import { BsDropletFill } from 'react-icons/bs';

function DayHour({ data }: { data: HoursForcast }) {
  return (
    <li className={styles.hour}>
      <div>
        <p>{data.time}</p>
        {/* TODO: alt */}
        <Image src={data.icon} alt="weather status" width={30} height={30} />
        <p>{data.temp}°</p>
        <p>
          <BsDropletFill /> {data.humidity}%
        </p>
      </div>
    </li>
  );
}

export default DayHour;
