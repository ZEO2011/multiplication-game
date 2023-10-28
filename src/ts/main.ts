import "/src/css/main.css";
import timer from "./utils/timer";
import generateRandom from "./utils/generateRandomQuestion";

const timerElement = document.getElementById("timer") as HTMLDivElement;
const startBtn = document.getElementById("start-btn") as HTMLButtonElement;
const answerInput = document.getElementById("answer") as HTMLInputElement;
const question = document.getElementById("question") as HTMLHeadingElement;
const highScoreElement = document.getElementById(
  "high-score",
) as HTMLSpanElement;
const scoreSpan = document.getElementById("score") as HTMLSpanElement;

let playing = false;
let score = 0;
let highScore = 0;

if (localStorage.getItem("high-score")) {
  highScore = Number(localStorage.getItem("high-score"));
  highScoreElement.innerHTML = String(highScore);
}

function startGame() {
  answerInput.value = "";
  answerInput.focus();
  score = 0;
  scoreSpan.innerHTML = String(score);
  timer(
    (time) => {
      timerElement.innerHTML = `${time}s`;
    },
    async () => {
      playing = false;
      highScore = highScore >= score ? highScore : score;
      localStorage.setItem("high-score", String(highScore));
      highScoreElement.innerHTML = String(highScore);
      const chosen = confirm(`your score is ${score}, want to try again?`);
      if (chosen) {
        score = 0;
        startGame();
      } else {
        startBtn.style.display = "block";
        question.innerHTML = "start the game";
      }
    },
  );
  generateRandom(question);
  playing = true;
  startBtn.style.display = "none";
}

startBtn.addEventListener("click", startGame);

answerInput.addEventListener("keyup", () => {
  if (playing) {
    const questionOne = document.getElementById("quiz-1") as HTMLSpanElement;
    const questionTwo = document.getElementById("quiz-2") as HTMLSpanElement;
    if (
      parseInt(answerInput.value) ===
      parseInt(questionOne.innerHTML) * parseInt(questionTwo.innerHTML)
    ) {
      generateRandom(question);

      score++;
      scoreSpan.innerHTML = String(score);
      answerInput.value = "";
    }
  }
});
