import { randomNumber, pair, startGame } from '../index';

// Создадим описание игры
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
    if (num === 2) return true;
    if (num < 2 || num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

// Создадим логику игры
const gameProgression = () => {
    const num = randomNumber(2, 40);

    const correctAnswer = isPrime(num) === true ? 'yes' : 'no';
    const question = num;

    return pair(question, correctAnswer);
};

// Запишем в результат вызов игры из index.js с передачей данных
const result = () => startGame(description, gameProgression);

export default result;
