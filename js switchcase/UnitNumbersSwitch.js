const readline = require("readline-sync");


let number = parseInt(readline.question("Enter Number : "));
switch(number)
{
    case 1 :
        console.log("unit");
        break;
       
    case 10 :
        console.log("ten");
        break;
        

    case 100 :
        console.log("hundred");
        break;
        
    case 1000 :
        console.log("thousand");
        break; 

    case 10000 :
        console.log("ten thousand");
        break;

    default :
        console.log("Enter Valid No");
        break;
}