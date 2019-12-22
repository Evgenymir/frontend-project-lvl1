import { randomNumber, pair } from '../index';

export const description = 'What is the result of the expression?';

export const gameCalc = () => {
    const numberOne = randomNumber(1, 5);
    const numberTwo = randomNumber(1, 5);
    const operations = ['+', '-', '*'];
    const indexOperation = randomNumber(1, operations.length - 1);
    let question = '';
    let correctAnswer = '';

    switch (indexOperation) {
    case 0:
        question = `${numberOne} + ${numberTwo}`;
        correctAnswer = String(numberOne + numberTwo);
        break;
    case 1:
        question = `${numberOne} - ${numberTwo}`;
        correctAnswer = String(numberOne - numberTwo);
        break;
    case 2:
        question = `${numberOne} * ${numberTwo}`;
        correctAnswer = String(numberOne * numberTwo);
        break;
    default:
        break;
    }

    return pair(question, correctAnswer);
};
