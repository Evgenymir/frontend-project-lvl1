import { randomNumber, pair } from '../index';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

export const gamePrime = () => {
    const num = randomNumber(2, 20);

    const correctAnswer = isPrime(num) === true ? 'yes' : 'no';
    const question = num;

    return pair(question, correctAnswer);
};
