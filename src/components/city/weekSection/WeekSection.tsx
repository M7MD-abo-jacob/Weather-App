import { DayForcast } from '@/types';
import WeekDays from './weekDays/WeekDays';
import styles from './WeekSection.module.css';
const WeekSection = ({ daysForcast }: { daysForcast: DayForcast[] }) => {
  return (
    <section className={styles.week}>
      <h2>7-Day forcast:</h2>
      <WeekDays data={daysForcast} />
    </section>
  );
};

export default WeekSection;
