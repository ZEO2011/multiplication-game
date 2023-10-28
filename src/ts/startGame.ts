import generateRandom from "./utils/generateRandomQuestion";
import timer from "./utils/timer";

export default function startGame(
	answerInput: HTMLInputElement,
	question: HTMLHeadingElement,
	playing: boolean,
	startBtn: HTMLButtonElement,
	timerElement: HTMLHeadingElement,
	score: number,
) {
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
				startGame(
					answerInput,
					question,
					playing,
					startBtn,
					timerElement,
					score,
				);
			} else {
				location.reload();
			}
		},
	);
	generateRandom(question);
	playing = true;
	startBtn.remove();
}
