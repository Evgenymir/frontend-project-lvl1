import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';

export const getCons = (question, correctAnswer) => cons(question, correctAnswer);
const getQuestion = (data) => car(data);
const getCorrectAnswer = (data) => cdr(data);
const maxNumberGames = 3;

const startGame = (description, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log('');

  const startGameCounter = (counter) => {
    if (counter === maxNumberGames) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const data = gameData();
    const question = getQuestion(data);
    const correctAnswer = getCorrectAnswer(data);

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');

    startGameCounter(counter + 1);
  };

  startGameCounter(0);
};

export default startGame;
