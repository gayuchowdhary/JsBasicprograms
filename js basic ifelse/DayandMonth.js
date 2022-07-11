const readline = require("readline-sync");
let day = parseInt(readline.question("Enter your Date : "));
let month = parseInt(readline.question("Enter your Month: "));
if(( month == 3 && day <= 20 || month == 6 && day >= 20 ))
{
    console.log( "false");
}
else{
    console.log( "true");
}