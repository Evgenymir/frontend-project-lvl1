import readlineSync from 'readline-sync';

// Рандомное число
export const randomNumber = () => Math.floor(Math.random() * 20) + 1;

console.log('Welcome to the Brain Games!');

// Узнаем имя пользователя.
export const getUserName = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hi ${userName} !`);
    return userName;
};

// Игра brain-even
export const gameEven = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no". \n');
    const name = getUserName();
    console.log('\n');

    const gameEvenBeginning = (counter = 0) => {
        const questionNumber = `Question: ${randomNumber()}`;
        console.log(questionNumber);

        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';

        if (counter === 2) {
            return console.log(`Congratulations, ${name}!`);
        }

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            return gameEvenBeginning(counter + 1);
        }

        return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "no". \n Let's try again, ${name}!`);
    };

    gameEvenBeginning(0);
};
