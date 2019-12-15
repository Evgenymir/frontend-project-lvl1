import readlineSync from 'readline-sync';
import { randomNumber, getUserName } from '../index';

const gameEven = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no". \n');
    const name = getUserName();
    console.log('\n');

    const gameEvenBeginning = (counter = 0) => {
        const questionNumber = randomNumber(1, 20);
        console.log(`Question: ${questionNumber}`);

        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';

        if (correctAnswer === userAnswer) {
            if (counter === 2) {
                return console.log(`Congratulations, ${name}!`);
            }

            console.log('Correct!');
            return gameEvenBeginning(counter + 1);
        }

        return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${name}!`);
    };

    gameEvenBeginning(0);
};

export default gameEven;
