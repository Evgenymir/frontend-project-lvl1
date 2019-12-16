import { randomNumber, pair, startGame } from '../index';

// Создадим описание игры
const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
    if (b === 0) return a;
    return (b, a % b);
};

// Создадим логику игры
const gameGcd = () => {
    const numberOne = randomNumber(1, 100);
    const numberTwo = randomNumber(1, 100);

    const correctAnswer = `${gcd(numberOne, numberTwo)}`;

    const question = `${numberOne} ${numberTwo}`;

    return pair(question, correctAnswer);
};

// Запишем в результат вызов игры из index.js с передачей данных
const result = () => startGame(description, gameGcd);

export default result;
