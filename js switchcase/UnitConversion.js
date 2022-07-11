const readline = require("readline-sync");

console.log("Enter your choice :\n1 Feet to Inch \t2 feet to Meter \n3 Inch to Feet \t4 Meter to Feet");
let menu = parseInt(readline.question("Enter menu : "));
let number = parseInt(readline.question("Enter Number : "));
let result;

switch (menu){
    case 1:
        console.log("Feet to Inch");
        result = number * 12;
        break;
    case 2:
        console.log("Feet to Meter");
        result = number * 0.3048;
        
        break;
    case 3:
        console.log("Inch to Feet");
        result = number * 0.0833333;
        break;
    case 4:
        console.log("Meter to Feet");
        result = number * 3.28084
        break;
    default :
        console.log("Wrong input");                                                                               
}
console.log("Result : ",result);