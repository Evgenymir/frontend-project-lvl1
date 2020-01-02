import startGame, { consData } from '../index';
import randomNumber from '../utils';

const description = 'What number is missing in the progression?';
const lengthProgression = 10;
const quantityIndexElement = 10;

const getGameDataProgression = () => {
  const startNumber = randomNumber(1, 20);
  const progressionStep = randomNumber(3, 6);
  const indexHideElement = randomNumber(1, quantityIndexElement);
  let result = '';

  for (let i = 0; i <= lengthProgression; i += 1) {
    if (i === indexHideElement) {
      result = `${result}.. `;
    } else {
      const progressionNumber = startNumber + (progressionStep * (i - 1));
      if (i === lengthProgression) {
        result = `${result}${progressionNumber}`;
      } else {
        result = `${result}${progressionNumber} `;
      }
    }
  }
  const correctAnswer = String(startNumber + (progressionStep * (indexHideElement - 1)));
  const question = result;

  return consData(question, correctAnswer);
};

export default () => startGame(description, getGameDataProgression);
