export default function saveToLocalStorage(value: number) {
  const savedValue = localStorage.getItem("high-score");
  if (savedValue) {
    value = Number(value);
  } else {
    localStorage.setItem("high-score", String(value));
  }
}
