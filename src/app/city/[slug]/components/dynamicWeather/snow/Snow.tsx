'use client';
import { useEffect, useState } from 'react';
import { BsSnow2 } from 'react-icons/bs';
import getRandomInt from '@/lib/getRandomInt';
import styles from './Snow.module.css';

function Snow() {
  const [snowFlakes, setSnowFlakes] = useState<any[]>([]);
  useEffect(() => {
    if (typeof document !== 'undefined') {
      setSnowFlakes(
        makeSnowFlakes(document.body.offsetWidth, document.body.offsetHeight),
      );
    }
  }, [typeof window]);

  return <div className={styles.snow}>{snowFlakes}</div>;
}

export default Snow;

function makeSnowFlakes(width: any, height: any) {
  const particles = [];
  for (let i = 0; i < width; i += 25) {
    const particleStyles: React.CSSProperties & { [key: string]: string } = {
      '--particle-sp': `${getRandomInt(5, 40)}`,
      '--particle-left': `${getRandomInt(0, width - 20)}px`,
      '--particle-top': `${getRandomInt(-90, 30)}px`,
      '--particle-size': `${getRandomInt(10, 50)}px`,
      '--h': `${height}px`,
    };
    particles.push(
      <span className={styles.flake} style={particleStyles} key={i}>
        <BsSnow2 />
      </span>,
    );
  }
  return particles;
}
