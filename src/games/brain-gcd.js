import startGame, { consData } from '../index';
import randomNumber from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) return a;
  return (b, a % b);
};

const getGameDataGcd = () => {
  const numberOne = randomNumber(1, 20);
  const numberTwo = randomNumber(1, 20);

  const correctAnswer = gcd(numberOne, numberTwo).toString();

  const question = `${numberOne} ${numberTwo}`;

  return consData(question, correctAnswer);
};

export default () => startGame(description, getGameDataGcd);
