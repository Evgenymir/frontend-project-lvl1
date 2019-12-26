import startGame, { randomNumber, pair } from '../index';

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

const gamePrime = () => {
    const question = randomNumber(2, 20);
    const correctAnswer = isPrime(question) === true ? 'yes' : 'no';

    return pair(question, correctAnswer);
};

export default () => startGame(description, gamePrime);
