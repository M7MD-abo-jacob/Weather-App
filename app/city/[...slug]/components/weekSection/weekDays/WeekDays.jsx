import WeekDay from "./WeekDay";

function WeekDays(props) {
  const data = props.data.slice(1);

  return (
    <div>
      {data.map((day) => {
        return <WeekDay data={day} key={day.date} />;
      })}
    </div>
  );
}

export default WeekDays;
