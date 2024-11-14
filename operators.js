//Arithmetic Operators
//1, additions
let sum = 5 + 3;
console.log(sum);

//2, subtractions
let difference = 10-4;
console.log(difference);

//3, multiplication
let product = 7 * 2;
console.log(product);

//4, division
let quotient = 20 / 5;
console.log(quotient);

//5, remainder
let remainder = 10 % 3;
console.log(remainder);

//6, power
let power = 2**10;
console.log(power);


//Assignment Operators
//1, Assignment
let x = 5;
console.log(x);

//2, additon Assignment
let y = 5;
y +=2;
console.log(y);

//3, subtraction assignment
let z = 10;
z -=2;
console.log(z)


//Logical Operators
// AND (&&): returns true if both operands are true.
let isTrue = (5 > 3 && 3 > 5);
// OR (||): returns true if at least one operand is true.
let istrue = (5 > 3 || 3 > 5); //true
// NOT (!): returns true if the operand is false.



//Control Structures
//1. Conditional Statement

// if statement- executes a block of codes if a specified condition is true.
let p = 4;

if (p > 0) {
    console.log('x is positive');
}
// if else statement: executes a block of codes if a specified condition id true, otherwise another block of code is executed.

if(p > 0) {
    console.log('x is positive');
}
else {
    console.log('x is not positive');
}

//else if statements: adds a new condition to test if the first condition is false.

if (p > 0) {
console.log('x is positive');
}
else if (p===0) {
    console.log('x is zero');
}
else{
    console.log('x is negative');
}

let temperature = 15;
if (temperature > 25) {
    console.log("it's a hot day!");
}
else if (temperature < 15) {
    console.log("it's a cold day!");
}
else {
    console.log("it's a warm day!");
}

let fruit = "apple";
switch (fruit) {
    case "banana":
    console.log("it's a banana!");
    break;

    case "apple":
        console.log("it's an apple!");
        break;

    case "orange":
        console.log("it's an orange!");
        break;

    case "orange":
        console.log("it's an orange!");
        break;
        
    default:
            console.log("unknown fruit");
}

const value = 'apple';
const fruits = ['apple', 'banana', 'orange'];

switch (true) {
    case fruits.includes(value):
        console.log(`${value} is in the fruits array`);
        break;
        default:
            console.log(`${value} is not in the fruits array`);
}