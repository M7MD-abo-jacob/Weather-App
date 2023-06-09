import styles from "./WeekDay.module.css";

function WeekDay({ data }) {
  const date = new Date(data.date);

  const options = { weekday: "short", day: "numeric", month: "numeric" };
  const day = Intl.DateTimeFormat("en", options).format(date);

  return (
    <div className={styles.day}>
      <p className={styles.day_name}>{day}</p>
      <p className={styles.day_temp}>
        {data.temp_max}°/{data.temp_min}°
      </p>
      <div className={styles.day_status}>
        <img src={data.icon1} alt={"day weather status icon"} />{" "}
        <img src={data.icon2} alt={"night weather status icon"} />
      </div>
    </div>
  );
}

export default WeekDay;
