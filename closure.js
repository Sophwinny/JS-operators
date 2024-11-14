// Closure is a feature in js where an inner function has access to the variable of its outer function, even aafter the outer function has finished executing.
// function outerFunction(){
//     const outerVariable = 'I am from outer Function';

//     function innerFunction(){
//         console.log(outerVariable) 
//     }

//     return innerFunction;
// }

// const closureFunction = outerFunction();
// closureFunction();



// function createCounter() {
//     let counter = 2;

//     return function() {
//         counter++;
//         return counter;
//     };

// }

// const counterFunction2 = createCounter();
// console.log(counterFunction2());
// console.log(counterFunction2());
// console.log(counterFunction2());


function createCounter(){
    let counter = 0;

    return {
        increment: function() {
            counter++;
            return counter;
        },

        decrement: function() {
            counter--;
            return counter;
        },

        getCount: function() {
            return counter;
        }
    }
}

const counterFunction = createCounter();
console.log(counterFunction.increment());
console.log(counterFunction.increment());
console.log(counterFunction.decrement());
console.log(counterFunction.decrement());
console.log(counterFunction.getCount());