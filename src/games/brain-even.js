import startGame, { randomNumber, pair } from '../index';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEven = () => {
    const question = randomNumber(1, 10);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

    return pair(question, correctAnswer);
};

export default () => startGame(description, gameEven);
