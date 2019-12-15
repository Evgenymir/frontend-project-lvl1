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

// Игра brain-even
export const gameEven = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no". \n');
    const name = getUserName();
    console.log('\n');

    const gameEvenBeginning = (counter = 0) => {
        const questionNumber = randomNumber(1, 20);
        console.log(`Question: ${questionNumber}`);

        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';
        console.log(correctAnswer);

        if (counter === 2) {
            return console.log(`Congratulations, ${name}!`);
        }

        if (correctAnswer === userAnswer) {
            console.log('Correct!');
            return gameEvenBeginning(counter + 1);
        }

        return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "no". \n Let's try again, ${name}!`);
    };

    gameEvenBeginning(0);
};

// Игра Brain-calc

export const gameCalc = () => {
    console.log('What is the result of the expression?');
    console.log('');
    const name = getUserName();
    console.log('');

    const gameCalcBeginning = (counter = 0) => {
        const numberOne = randomNumber(1, 20);
        const numberTwo = randomNumber(1, 20);
        const isOperandIndex = randomNumber(1, 4);
        let operand = '';
        let correctAnswer = '';

        if (isOperandIndex === 1) {
            operand = '+';
            correctAnswer = numberOne + numberTwo;
        }

        if (isOperandIndex === 2) {
            operand = '-';
            correctAnswer = numberOne - numberTwo;
        }

        if (isOperandIndex === 3) {
            operand = '*';
            correctAnswer = numberOne * numberTwo;
        }

        console.log(`Question: ${numberOne} ${operand} ${numberTwo}`);

        const userAnswer = readlineSync.question('Your answer: ');

        console.log(typeof correctAnswer);
        console.log(typeof userAnswer);

        if (correctAnswer.toString() === userAnswer) {
            if (counter === 2) {
                return console.log(`Congratulations, ${name}!`);
            }

            console.log('Correct!');
            return gameCalcBeginning(counter + 1);
        }

        return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "no". \n Let's try again, ${name}!`);
    };

    gameCalcBeginning(0);
};
