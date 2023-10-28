import randomNumber from "./randomNumber";

export default function generateRandom(question: HTMLHeadingElement) {
	const randomOne = randomNumber();
	const randomTwo = randomNumber();
	question.innerHTML = `<span id=\"quiz-1\">${randomOne}</span> * <span id=\"quiz-2\">${randomTwo}</span>?`;
}
