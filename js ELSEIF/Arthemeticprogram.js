const readline = require("readline-sync");

let a =parseInt(readline.question("Enter a: "));
let b =parseInt(readline.question("Enter b: "));
let c =parseInt(readline.question("Enter c: "));
let sum1 = a+b*c;
console.log(sum1);
let sum2 = a % b + c;
console.log(sum2);
let sum3 = c + a / b;
console.log(sum3);
let sum4 = a * b + c;
console.log(sum4);
if (( sum1 > sum2 ) && ( sum1 > sum3 ) && ( sum1 > sum4 ))
{
    console.log(sum1," sum1 IS Greater Than All");
}
else if (( sum2 > sum1 ) && ( sum2 > sum3 ) && ( sum2 > sum4 ))
{
    console.log(sum2," sum 2IS Greater Than All");
}
else if (( sum3 > sum2 ) && ( sum3 > sum1 ) && ( sum3 > sum4 ))
{
    console.log(sum3,"sum3 IS Greater Than All");
}
else{
    console.log(sum4,"sum4 IS Greater Than All");
}

if (( sum1 < sum2 ) && ( sum1 < sum3 ) && ( sum1 < sum4 ))
{
    console.log(sum1," sum1 IS Greater Than All");
}
else if (( sum2 < sum1 ) && ( sum2 < sum3 ) && ( sum2 < sum4 ))
{
    console.log(sum2," sum 2IS Greater Than All");
}
else if (( sum3 < sum2 ) && ( sum3 < sum1 ) && ( sum3 < sum4 ))
{
    console.log(sum3,"sum3 IS Greater Than All");
}
else{
    console.log(sum4,"sum4 IS Greater Than All");
}