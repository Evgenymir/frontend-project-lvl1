import { randomNumber, pair } from '../index';

export const description = 'What number is missing in the progression?';
const lengthProgression = 10;

export const gameProgression = () => {
    const startNumber = randomNumber(1, 20);
    const multiplier = randomNumber(3, 6);
    const indexHideElement = randomNumber(1, 10);
    let result = '';

    for (let i = 0; i <= lengthProgression; i += 1) {
        if (i === indexHideElement) {
            result += '.. ';
        } else {
            const progressionNumber = startNumber + (multiplier * (i - 1));
            result += `${progressionNumber} `;
        }
    }
    const correctAnswer = String(startNumber + (multiplier * (indexHideElement - 1)));
    const question = result;

    return pair(question, correctAnswer);
};
