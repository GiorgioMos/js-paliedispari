function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

function checkGuess() {
    let userChoice = parseInt(prompt("Choose a number between 1 and 5:"));
    
    if (userChoice < 1 || userChoice > 5 || isNaN(userChoice)) {
        alert("Invalid input. Please choose a number between 1 and 5.");
        return;
    }

    let randomNum = generateRandomNumber();
    let sum = userChoice + randomNum;
    let result = sum % 2 === 0 ? 'even' : 'odd';

    document.getElementById('result').innerHTML = 'You chose ' + userChoice + ', the random number was ' + randomNum + ', and the sum is ' + sum + ' which is ' + result + '.';
}
