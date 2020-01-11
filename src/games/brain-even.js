import startGame from '../index';
import randomNumber, { makeGameData } from '../utils';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const getGameDataEven = () => {
  const question = randomNumber(1, 10);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return makeGameData(question, correctAnswer);
};

export default () => startGame(description, getGameDataEven);
