'use client';
import { useEffect, useState } from 'react';
import styles from './Rain.module.css';
import getRandomInt from '@/lib/getRandomInt';
import { CustomStyles } from '@/types';

function Rain() {
  const [rainDrops, setRainDrops] = useState<{ [key: string]: string }[]>([]);
  useEffect(() => {
    if (typeof document !== 'undefined') {
    }
    setRainDrops(
      makeRainDrops(document.body.offsetWidth, document.body.offsetHeight),
    );
  }, [typeof window]);

  return (
    <div className={styles.rain}>
      {rainDrops.map((dropStyles, i) => (
        <span className={styles.drop} style={dropStyles} key={i} />
      ))}
    </div>
  );
}
// {/* {rainDrops} */}

export default Rain;

function makeRainDrops(width: number, height: number) {
  const particles = [];
  for (let i = 0; i < width; i += 25) {
    const particleStyles: CustomStyles = {
      '--particle-speed': `${getRandomInt(10, 30)}`,
      '--particle-left': `${getRandomInt(0, width - 20)}px`,
      '--particle-top': `${getRandomInt(-170, 20)}px`,
      '--h': `${height}px`,
    };
    particles.push(particleStyles);
  }
  return particles;
}
