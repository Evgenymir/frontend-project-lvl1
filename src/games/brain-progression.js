import startGame, { getCons } from '../index';
import randomNumber from '../utils';

const description = 'What number is missing in the progression?';
const maxNumberProgression = 10;

const getGameDataProgression = () => {
  const startNumber = randomNumber(1, 20);
  const progressionStep = randomNumber(3, 6);
  const hideNumberProgression = randomNumber(1, maxNumberProgression);
  let question = '';

  for (let i = 0; i <= maxNumberProgression; i += 1) {
    if (i === hideNumberProgression) {
      question = `${question}.. `;
    } else {
      const progressionNumber = startNumber + (progressionStep * (i - 1));
      if (i === maxNumberProgression) {
        question = `${question}${progressionNumber}`;
      } else {
        question = `${question}${progressionNumber} `;
      }
    }
  }
  const correctAnswer = String(startNumber + (progressionStep * (hideNumberProgression - 1)));

  return getCons(question, correctAnswer);
};

export default () => startGame(description, getGameDataProgression);
