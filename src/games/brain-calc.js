import readlineSync from 'readline-sync';
import { randomNumber, getUserName } from '../index';

const gameCalc = () => {
    console.log('What is the result of the expression?');
    console.log('');
    const name = getUserName();
    console.log('');

    const gameCalcBeginning = (counter = 0) => {
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

        console.log(`Question: ${numberOne} ${operand} ${numberTwo}`);

        const userAnswer = readlineSync.question('Your answer: ');

        if (correctAnswer === userAnswer) {
            if (counter === 2) {
                return console.log(`Congratulations, ${name}!`);
            }

            console.log('Correct!');
            return gameCalcBeginning(counter + 1);
        }

        return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${name}!`);
    };

    gameCalcBeginning(0);
};

export default gameCalc;
