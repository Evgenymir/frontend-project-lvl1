import startGame from '../index';
import randomNumber, { makeGameData } from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getGameDataProgression = () => {
  const firstProgressionNumber = randomNumber(1, 20);
  const progressionStep = randomNumber(3, 6);
  const progressionIndex = randomNumber(1, progressionLength);
  let question = '';

  for (let i = 0; i <= progressionLength - 1; i += 1) {
    if (i === progressionIndex) {
      question = `${question}.. `;
    } else {
      const progressionNumber = firstProgressionNumber + (progressionStep * (i - 1));
      if (i >= progressionLength - 1) {
        question = `${question}${progressionNumber}`;
      } else {
        question = `${question}${progressionNumber} `;
      }
    }
  }
  const correctAnswer = String(firstProgressionNumber + (progressionStep * (progressionIndex - 1)));

  return makeGameData(question, correctAnswer);
};

export default () => startGame(description, getGameDataProgression);
