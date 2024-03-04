// return a random int between two (min and max) numbers
export default function getRandomInt(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
