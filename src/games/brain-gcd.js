import startGame, { randomNumber, pair } from '../index';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
    if (b === 0) return a;
    return (b, a % b);
};

const gameGcd = () => {
    const numberOne = randomNumber(1, 20);
    const numberTwo = randomNumber(1, 20);

    const correctAnswer = gcd(numberOne, numberTwo).toString();

    const question = `${numberOne} ${numberTwo}`;

    return pair(question, correctAnswer);
};

export default () => startGame(description, gameGcd);
