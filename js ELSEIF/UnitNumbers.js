const readline = require("readline-sync");


let number = parseInt(readline.question("Enter Number : "));
if(( number == 1 ))
{
    console.log("unit");
}
else if(( number == 10 ))
{
    console.log("ten");
}
else if(( number == 100 ))
{
    console.log("hundred");
}
else if(( number == 1000 ))
{
    console.log("thousand");
}
else if(( number == 10000 ))
{
    console.log("ten thousand");
}
else 
{
    console.log("Enter Valid No");
}