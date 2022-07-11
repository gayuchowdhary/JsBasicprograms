const readline = require("readline-sync");

let number=parseInt(readline.question("Enter Number : "));
for(let i = 1; i<= number;i++){
    let count = 0;
    for (let j = 1;j <= i;j++){
        if (i % j == 0){
            count = count + 1;      
        }
    }
    if(count == 2){
        console.log(i," is a Prime Number");
    }
}