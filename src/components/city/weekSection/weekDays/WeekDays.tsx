import { DayForcast } from '@/types';
import WeekDay from './WeekDay';

function WeekDays(props: { data: DayForcast[] }) {
  const data = props.data.slice(1);

  return (
    <ul>
      {data.map((day: DayForcast) => {
        return <WeekDay data={day} key={day.date} />;
      })}
    </ul>
  );
}

export default WeekDays;
