import styles from './DayHour.module.css';
import { BsDropletFill } from 'react-icons/bs';

function DayHour({ data }: { data: any }) {
  return (
    <div className={styles.hour}>
      <div>
        <p>{data.time}</p>
        <img src={data.icon} alt={'weather status icon'} />
        <p>{data.temp}°</p>
        <p>
          <BsDropletFill /> {data.humidity}%
        </p>
      </div>
    </div>
  );
}

export default DayHour;
