const readline = require("readline-sync");
console.log("Printing the Harmonic Number which you have to pass the number ");
let number = parseInt(readline.question("Enter Number : "));
let harmonicNumber = 1;
for(i = 1;i<=number;i++){
    harmonicNumber = (harmonicNumber + 1 / (i + 1));
}
console.log(harmonicNumber)