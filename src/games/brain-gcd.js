import { randomNumber, pair } from '../index';

export const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
    if (b === 0) return a;
    return (b, a % b);
};

export const gameGcd = () => {
    const numberOne = randomNumber(1, 20);
    const numberTwo = randomNumber(1, 20);

    const correctAnswer = `${gcd(numberOne, numberTwo)}`;

    const question = `${numberOne} ${numberTwo}`;

    return pair(question, correctAnswer);
};
