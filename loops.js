//A loop is used for repitition 

//for Loop: is ideal when you know in advance how many times you want to repeat a block of code.
// for (initialization; condition; increment) {
//     //code to be executed
// }

//initialization: let i = 0 sets the starting point.
//condition: i <5 keeps the loop running while i is less than 5.
//increment: i++ increases i by 1 after each loop iteration.

for(let i = 0; i < 5; i++) {
    console.log(i); //outputs: 0, 1, 2, 3, 4,
}

const fruits = ["apple", "banana", "orange", "mango", "purple"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//Exercise
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    if(i === 2){
        break
    }
}


//while Loop: used when the number of iterations isn't known beforehand. it keeps running as long as the condition is true.

// while (condition) {
//     //code to be executed
// }

let i = 0;
while (i < 5) {
    console.log(i); //outputs: 0, 1, 2, 3, 4
    i++;
}


//do...while Loop: ensures that the block of code runs at least once before checking the condition.

let x = 0;
do {
    console.log(x); //outputs: 0, 1, 2, 3, 4
    x++
} while (x < 5);

//break;
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(i); //outputs:0, 1, 2
}

//continue;
for (let i = 0; i < 5; i++) {
    if (i === 3) continue;
    console.log(i); //outputs:0, 1, 2, 4
}