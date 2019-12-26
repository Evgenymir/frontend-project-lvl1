import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';

export const randomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

export const pair = (question, correctAnswer) => cons(question, correctAnswer);
const getQuestion = (data) => car(data);
const getcorrectAnswer = (data) => cdr(data);

const startGame = (description, gameData) => {
    console.log('Welcome to the Brain Games!');
    console.log(description);
    console.log('');

    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hi ${userName}!`);
    console.log('');

    const gameCounter = (counter) => {
        if (counter === 3) {
            console.log(`Congratulations, ${userName}!`);
            return;
        }

        const data = gameData();
        const question = getQuestion(data);
        const correctAnswer = getcorrectAnswer(data);

        console.log(`Question: ${question}`);

        const userAnswer = readlineSync.question('Your answer: ');

        if (correctAnswer !== userAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${userName}!`);
            return;
        }

        console.log('Correct!');

        gameCounter(counter + 1);
    };

    gameCounter(0);
};

export default startGame;
