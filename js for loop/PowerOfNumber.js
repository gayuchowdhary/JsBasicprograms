const readline = require("readline-sync");
let number = parseInt(readline.question("Enter Number : "));
console.log("The table of powers of two upto 2^ number:");
let result;
for ( let i = 0 ; i <= number ; i++ )
{
    console.log(Math.pow(2,i));
}