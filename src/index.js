import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';

// Рандомное число
export const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Создадим пару для получения вопроса и корректного ответа из игр
export const pair = (question, correctAnswer) => cons(question, correctAnswer);
// Получим вопрос из игры
const getQuestion = (data) => car(data);
// Получим правильный ответ
const getcorrectAnswer = (data) => cdr(data);


// Узнаем имя пользователя.
export const getUserName = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hi ${userName}!`);
    return userName;
};

// Функция для запуска игр.
export const startGame = (description, gameData) => {
    console.log('Welcome to the Brain Games!');
    // Выведем описание игры
    console.log(description);
    console.log('');

    const name = getUserName();
    console.log('');

    // Созаем рекурсивный цикл
    const gameCounter = (counter = 0) => {
        const data = gameData();
        const question = getQuestion(data);
        const correctAnswer = String(getcorrectAnswer(data));

        console.log(`Question: ${question}`);

        const userAnswer = readlineSync.question('Your answer: ');

        if (correctAnswer !== userAnswer) {
            return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${name}!`);
        }

        console.log('Correct!');
        if (counter === 2) {
            return console.log(`Congratulations, ${name}!`);
        }
        return gameCounter(counter + 1);
    };

    gameCounter(0);
};
