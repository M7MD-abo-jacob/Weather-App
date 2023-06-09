"use client";
import { useEffect, useState } from "react";
import styles from "./Rain.module.css";
import getRandomInt from "@/app/lib/getRandomInt";

function Rain() {
  const [rainDrops, setRainDrops] = useState([]);
  useEffect(() => {
    if (typeof document !== "undefined") {
    }
    setRainDrops(
      makeRainDrops(document.body.offsetWidth, document.body.offsetHeight)
    );
  }, [typeof window]);

  return <div className={styles.rain}>{rainDrops}</div>;
}

export default Rain;

function makeRainDrops(width, height) {
  const particles = [];
  for (let i = 0; i < width; i += 15) {
    particles.push(
      <span
        className={styles.drop}
        style={{
          "--particle-sp": `${getRandomInt(10, 30)}`,
          "--particle-left": `${getRandomInt(0, width - 20)}px`,
          "--particle-top": `${getRandomInt(-170, 20)}px`,
          "--h": `${height}px`,
        }}
        key={i}
      ></span>
    );
  }
  return particles;
}
