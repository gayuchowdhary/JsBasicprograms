const readline = require("readline-sync");
console.log("Palindrome number");
let number1 =parseInt(readline.question("Enter Number 1: "));
let number2=parseInt(readline.question("Enter Number  2: "));
palindrome(number1,number2);

function palindrome(){
    let r1,r2;
    let sum1 = 0,sum2=0;
    let temp1 = number1;
    let temp2=number2
    while(number1 > 0 && number2>0){
        r1 = number1 % 10; 
        r2=number2%10;
        number1 = parseInt(number1 / 10); 
        number2 = parseInt(number2 / 10); 
        sum1 = (sum1* 10) + r1;        
        sum2 = (sum2* 10) + r2;        

    }
    if(sum1 == temp1 && sum2==temp2){
        console.log("The given numbers are palindrome")
    }
    else{
        console.log("The given number are not a Palindrome")
    }
}