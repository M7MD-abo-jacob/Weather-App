import styles from './Clear.module.css';

function Clear({ dayTime }: { dayTime: boolean }) {
  // setting color and glow for sun/moon according to time
  const color = dayTime ? '#f6b41b' : '#d5fbfc';
  const shadow = dayTime
    ? `0 0 3rem 0.9rem ${color}, 0 0 1rem 0.1rem ${color}`
    : `0 0 0.9rem 0.3rem ${color}`;
  return (
    <div
      className={`${styles.sun} ${dayTime ? '' : styles.moon}`}
      style={{
        backgroundColor: color,
        boxShadow: shadow,
      }}></div>
  );
}

export default Clear;
