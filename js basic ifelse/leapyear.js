const readline = require("readline-sync");
let year = parseInt(readline.question("Enter your Date : "));
if(( year % 4 == 0 && year % 100 !=0 || year % 400 == 0)){
    console.log( "Leap Year");
}
else{
    console.log( "Not A Leap Year");
}