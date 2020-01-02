import startGame, { consData } from '../index';
import randomNumber from '../utils';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getGameDataCalc = () => {
  const numberOne = randomNumber(1, 5);
  const numberTwo = randomNumber(1, 5);
  const indexOperation = randomNumber(0, operations.length - 1);
  const question = `${numberOne} ${operations[indexOperation]} ${numberTwo}`;
  let correctAnswer = '';

  switch (operations[indexOperation]) {
    case operations[0]:
      correctAnswer = String(numberOne + numberTwo);
      break;
    case operations[1]:
      correctAnswer = String(numberOne - numberTwo);
      break;
    case operations[2]:
      correctAnswer = String(numberOne * numberTwo);
      break;
    default:
      break;
  }

  return consData(question, correctAnswer);
};

export default () => startGame(description, getGameDataCalc);
