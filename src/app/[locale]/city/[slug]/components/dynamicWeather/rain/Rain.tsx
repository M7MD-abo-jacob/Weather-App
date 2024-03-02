'use client';
import { useEffect, useState } from 'react';
import styles from './Rain.module.css';
import getRandomInt from '@/lib/getRandomInt';

function Rain() {
  const [rainDrops, setRainDrops] = useState<any[]>([]);
  useEffect(() => {
    if (typeof document !== 'undefined') {
    }
    setRainDrops(
      makeRainDrops(document.body.offsetWidth, document.body.offsetHeight),
    );
  }, [typeof window]);

  return <div className={styles.rain}>{rainDrops}</div>;
}

export default Rain;

function makeRainDrops(width: any, height: any) {
  const particles = [];
  for (let i = 0; i < width; i += 25) {
    const particleStyles: React.CSSProperties & { [key: string]: string } = {
      '--particle-sp': `${getRandomInt(10, 30)}`,
      '--particle-left': `${getRandomInt(0, width - 20)}px`,
      '--particle-top': `${getRandomInt(-170, 20)}px`,
      '--h': `${height}px`,
    };
    particles.push(
      <span className={styles.drop} style={particleStyles} key={i}></span>,
    );
  }
  return particles;
}
