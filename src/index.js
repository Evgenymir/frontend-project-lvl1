import readlineSync from 'readline-sync';

// Рандомное число
export const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

console.log('Welcome to the Brain Games!');

// Узнаем имя пользователя.
export const getUserName = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hi ${userName} !`);
    return userName;
};

