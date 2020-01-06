import startGame, { getCons } from '../index';
import randomNumber from '../utils';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isCorrectAnswer = (number) => number % 2 === 0;

const getGameDataEven = () => {
  const question = randomNumber(1, 10);
  const correctAnswer = isCorrectAnswer(question) ? 'yes' : 'no';

  return getCons(question, correctAnswer);
};

export default () => startGame(description, getGameDataEven);
