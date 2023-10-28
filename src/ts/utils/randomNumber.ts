export default function randomNumber(lowerThan: number = 20) {
  return Math.ceil(Math.random() * lowerThan);
}
