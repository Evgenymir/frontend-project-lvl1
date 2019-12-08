import readlineSync from 'readline-sync';

// Wait for user's response.
const userName = readlineSync.question('May I have your name? ');

export default userName;
