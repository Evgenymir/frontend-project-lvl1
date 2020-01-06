import startGame, { getCons } from '../index';
import randomNumber from '../utils';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getGameDataCalc = () => {
  const numberOne = randomNumber(1, 5);
  const numberTwo = randomNumber(1, 5);
  const operation = operations[randomNumber(0, operations.length - 1)];
  const question = `${numberOne} ${operation} ${numberTwo}`;
  let correctAnswer;

  switch (operation) {
    case '+':
      correctAnswer = String(numberOne + numberTwo);
      break;
    case '-':
      correctAnswer = String(numberOne - numberTwo);
      break;
    case '*':
      correctAnswer = String(numberOne * numberTwo);
      break;
    default:
      break;
  }

  return getCons(question, correctAnswer);
};

export default () => startGame(description, getGameDataCalc);
