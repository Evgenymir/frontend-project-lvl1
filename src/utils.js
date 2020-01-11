import { cons, car, cdr } from '@hexlet/pairs';

const randomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
export const makeGameData = (question, correctAnswer) => cons(question, correctAnswer);
export const getQuestion = (data) => car(data);
export const getCorrectAnswer = (data) => cdr(data);

export default randomNumber;
