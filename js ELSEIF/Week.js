
const readline = require("readline-sync");


let number = parseInt(readline.question("Enter Number : "));
if(( number == 1 ))
{
    console.log("Mondad");
}
else if(( number == 2 ))
{
    console.log("Tuesday");
}
else if(( number == 3 ))
{
    console.log("Wednesday");
}
else if(( number == 4 ))
{
    console.log("Thursday");
}
else if(( number == 5 ))
{
    console.log("Friday");
}
else if(( number == 6 ))
{
    console.log("Saturday");
}
else if(( number == 7 ))
{
    console.log("Sunday");
}
else 
{
    console.log("Enter Valid No");
}