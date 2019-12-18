import { randomNumber, pair, startGame } from '../index';

// Создадим описание игры
const description = 'What number is missing in the progression?';

// Создадим логику игры
const gameProgression = () => {
    const startNumber = randomNumber(1, 20);
    const multiplier = randomNumber(3, 10);
    const length = 10;
    const indexHideElement = randomNumber(1, 10);
    let result = '';

    for (let i = 0; i <= length; i += 1) {
        if (i === indexHideElement) {
            result += '.. ';
        } else {
            const progressionNumber = startNumber + (multiplier * (i - 1));
            result += `${progressionNumber} `;
        }
    }
    const correctAnswer = String(startNumber + (multiplier * (indexHideElement - 1)));
    const question = result;

    return pair(question, correctAnswer);
};

// Запишем в результат вызов игры из index.js с передачей данных
const result = () => startGame(description, gameProgression);

export default result;
