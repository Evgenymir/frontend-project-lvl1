import { randomNumber, pair } from '../index';

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const gameEven = () => {
    const question = randomNumber(1, 10);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

    return pair(question, correctAnswer);
};
