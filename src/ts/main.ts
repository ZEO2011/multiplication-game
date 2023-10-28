import "/src/css/main.css";
import timer from "./utils/timer";
import generateRandom from "./utils/generateRandomQuestion";

const timerElement = document.getElementById("timer") as HTMLDivElement;
const startBtn = document.getElementById("start-btn") as HTMLButtonElement;
const answerInput = document.getElementById("answer") as HTMLInputElement;
const question = document.getElementById("question") as HTMLHeadingElement;
let playing = false;
let score = 0;

function startGame() {
	answerInput.value = "";
	answerInput.focus();
	timer(
		(time) => {
			timerElement.innerHTML = `${time}s`;
		},
		async () => {
			playing = false;
			const chosen = confirm(
				`your score is ${score}, want to try again?`,
			);
			if (chosen) {
				score = 0;
				startGame();
			} else {
				location.reload();
			}
		},
	);
	generateRandom(question);
	playing = true;
	startBtn.remove();
}

startBtn.addEventListener("click", startGame);

answerInput.addEventListener("keyup", () => {
	if (playing) {
		const questionOne = document.getElementById(
			"quiz-1",
		) as HTMLSpanElement;
		const questionTwo = document.getElementById(
			"quiz-2",
		) as HTMLSpanElement;
		const scoreSpan = document.getElementById("score") as HTMLSpanElement;
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
