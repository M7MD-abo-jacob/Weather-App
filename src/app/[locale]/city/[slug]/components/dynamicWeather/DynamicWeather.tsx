'use client';
import { useEffect } from 'react';
import Clear from './clear/Clear';
import Rain from './rain/Rain';
import Snow from './snow/Snow';
import styles from './DynamicWeather.module.css';

function DynamicWeather({ data }: any) {
  const statusCode = data.slice(0, -1).toString(); // number
  const dayTime = data.slice(-1) === 'd'; // d or n

  // rain and snow codes from the openweathermap api
  const rainy = ['09', '10', '11'];
  const snowy = ['13'];

  useEffect(() => {
    if (typeof window !== 'undefined' && !dayTime) {
      document.body.classList.add('night');
    } else {
      document.body.classList.remove('night');
    }
  }, [typeof window]);

  const status = (statusCode: string) => {
    if (rainy.includes(statusCode)) {
      return <Rain />;
    } else if (snowy.includes(statusCode)) {
      return <Snow />;
    } else {
      return <Clear dayTime={dayTime} />;
    }
  };

  return (
    <div className={styles.dynamic_weather}>
      {/* <div className={styles.container}></div> */}
      {/* you can un-comment Rain or Snow components to see them in action */}
      {/* <Rain /> */}
      {/* <Snow /> */}
      {status(statusCode)}
      {/* back static clouds */}
      <div className={styles.cloud_l}>
        <div className={`${styles.cl1} ${styles.cl_gray}`}></div>
        <div className={`${styles.cl2} ${styles.cl_gray}`}></div>
        <div className={`${styles.cl3} ${styles.cl_gray}`}></div>
      </div>
      <div className={styles.cloud_l2}>
        <div className={`${styles.cl1} ${styles.cl_gray}`}></div>
        <div className={`${styles.cl2} ${styles.cl_gray}`}></div>
        <div className={`${styles.cl3} ${styles.cl_gray}`}></div>
      </div>
      <div className={styles.cloud_l3}>
        <div className={`${styles.cl1} ${styles.cl_gray}`}></div>
        <div className={`${styles.cl2} ${styles.cl_gray}`}></div>
        <div className={`${styles.cl3} ${styles.cl_gray}`}></div>
      </div>
      <div className={styles.cloud_l4}>
        <div className={`${styles.cl1} ${styles.cl_gray}`}></div>
        <div className={`${styles.cl2} ${styles.cl_gray}`}></div>
        <div className={`${styles.cl3} ${styles.cl_gray}`}></div>
      </div>

      {/* middle long moving clouds */}
      <div
        className={`${styles.cloud_l} ${styles.cls3}`}
        style={{ left: '100px' }}>
        <div
          className={`${styles.cl1} ${styles.cl31} ${styles.cl_whitish}`}></div>
        <div
          className={`${styles.cl2} ${styles.cl32} ${styles.cl_whitish}`}></div>
      </div>
      <div
        className={`${styles.cloud_l} ${styles.cls31}`}
        style={{ left: '400px' }}>
        <div
          className={`${styles.cl1} ${styles.cl31} ${styles.cl_whitish}`}></div>
        <div
          className={`${styles.cl2} ${styles.cl32} ${styles.cl_whitish}`}></div>
      </div>

      {/* small moving clouds */}
      <div className={`${styles.cloud_s} ${styles.cl_white}`}></div>
      <div
        className={`${styles.cloud_s} ${styles.cs2} ${styles.cl_white}`}></div>
      <div
        className={`${styles.cloud_s} ${styles.cs3} ${styles.cl_white}`}></div>
    </div>
  );
}

export default DynamicWeather;
