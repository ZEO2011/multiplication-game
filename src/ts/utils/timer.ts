export default async function timer(
  doFn: (time: number) => void = () => { },
  cbFn: () => void = () => { },
  timeout: number = 60,
  duration: number = 1000,
) {
  let time = timeout;
  const timerInterval = setInterval(() => {
    if (time === 0) {
      clearInterval(timerInterval);
      cbFn();
    }
    doFn(time);
    time--;
  }, duration);
}
