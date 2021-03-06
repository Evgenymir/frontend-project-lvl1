import startGame from '../index';
import randomNumber, { makeGameData } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) return a;
  return (b, a % b);
};

const getGameDataGcd = () => {
  const numberOne = randomNumber(1, 20);
  const numberTwo = randomNumber(1, 20);

  const correctAnswer = getGcd(numberOne, numberTwo).toString();

  const question = `${numberOne} ${numberTwo}`;

  return makeGameData(question, correctAnswer);
};

export default () => startGame(description, getGameDataGcd);
