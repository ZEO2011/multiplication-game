export default function randomNumber(lowerThan: number = 5) {
  return Math.ceil(Math.random() * lowerThan);
}
