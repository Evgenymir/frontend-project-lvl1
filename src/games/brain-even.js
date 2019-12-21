import { randomNumber, pair, startGame } from '../index';

// Создадим описание игры
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

// Создадим логику игры
const gameEven = () => {
    const question = randomNumber(1, 10);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

    return pair(question, correctAnswer);
};

// Запишем в результат вызов игры из index.js с передачей данных
const result = () => startGame(description, gameEven);

export default result;
