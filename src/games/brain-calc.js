import startGame, { randomNumber, pair } from '../index';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const gameCalc = () => {
    const numberOne = randomNumber(1, 5);
    const numberTwo = randomNumber(1, 5);
    const indexOperation = randomNumber(0, operations.length - 1);
    const question = `${numberOne} ${operations[indexOperation]} ${numberTwo}`;
    let correctAnswer = '';

    switch (indexOperation) {
    case 0:
        correctAnswer = String(numberOne + numberTwo);
        break;
    case 1:
        correctAnswer = String(numberOne - numberTwo);
        break;
    case 2:
        correctAnswer = String(numberOne * numberTwo);
        break;
    default:
        break;
    }

    return pair(question, correctAnswer);
};

export default () => startGame(description, gameCalc);
