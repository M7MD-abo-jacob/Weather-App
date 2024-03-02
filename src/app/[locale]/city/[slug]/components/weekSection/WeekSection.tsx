import WeekDays from './weekDays/WeekDays';
import styles from './WeekSection.module.css';
const WeekSection = ({ daysForcast }: any) => {
  return (
    <section className={styles.week}>
      <p>7-Day forcast:</p>
      <WeekDays data={daysForcast} />
    </section>
  );
};

export default WeekSection;
