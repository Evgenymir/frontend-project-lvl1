import { randomNumber, pair, startGame } from '../index';

// Создадим описание игры
const description = 'What is the result of the expression?';

// Создадим логику игры
const gameCalc = () => {
    const numberOne = randomNumber(1, 20);
    const numberTwo = randomNumber(1, 20);
    const isOperandIndex = randomNumber(1, 4);
    let operand = '';
    let correctAnswer = '';

    if (isOperandIndex === 1) {
        operand = '+';
        const answer = numberOne + numberTwo;
        correctAnswer = `${answer}`;
    }

    if (isOperandIndex === 2) {
        operand = '-';
        const answer = numberOne - numberTwo;
        correctAnswer = `${answer}`;
    }

    if (isOperandIndex === 3) {
        operand = '*';
        const answer = numberOne * numberTwo;
        correctAnswer = `${answer}`;
    }

    const question = `${numberOne} ${operand} ${numberTwo}`;

    return pair(question, correctAnswer);
};

// Запишем в результат вызов игры из index.js с передачей данных
const result = () => startGame(description, gameCalc);

export default result;
