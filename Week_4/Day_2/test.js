const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number, index) {
    console.log(`Element at index ${index} is: ${number}`);
});

let userInput;
do {
    userInput = prompt("Enter a positive number: ");
} while (isNaN(userInput) || parseFloat(userInput) <= 0);

console.log(`You entered a positive number: ${userInput}`);