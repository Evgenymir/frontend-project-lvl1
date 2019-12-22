import { randomNumber, pair } from '../index';

export const description = 'What is the result of the expression?';

export const gameCalc = () => {
    const numberOne = randomNumber(1, 5);
    const numberTwo = randomNumber(1, 5);
    const index = randomNumber(1, 4);
    let question = '';
    let correctAnswer = '';

    switch (index) {
    case 1:
        question = `${numberOne} + ${numberTwo}`;
        correctAnswer = String(numberOne + numberTwo);
        break;
    case 2:
        question = `${numberOne} - ${numberTwo}`;
        correctAnswer = String(numberOne - numberTwo);
        break;
    case 3:
        question = `${numberOne} * ${numberTwo}`;
        correctAnswer = String(numberOne * numberTwo);
        break;
    default:
        break;
    }

    return pair(question, correctAnswer);
};
