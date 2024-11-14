//A callback is a function passed into another function as an argument(parameter), which is then invoked inside the outer function to to complete some kind of routine or action. Function definition with a callback parameter.

function sayHello(name, callback){
    console.log(`Hello ${name}`)
    callback();
}

function sayGoodbye() {
    console.log(`Welcome to my App`)
}

sayHello("Martins", sayGoodbye);

//function expression
const greet = function(name, callback) {
    console.log("Hello," + name , " Welcome to my" + callback);
};

greet(" Jessica." , " App.");

const greet2 = function(name, callback) {
    console.log(`Hello ${name}`)
    callback();
}

const question = () => {
    console.log(`How are you doing?`)
}

greet2("Laide", question)

function greetUser(name, firstCallback, secondCallback) {
    console.log(`Hello ${name}`)
    firstCallback()
    secondCallback()
}

const welcomeMessage = () => {
    console.log(`Welcome to our app`)
}

const offerService = () => {
    console.log(`Please how can we help you?`)
}

greetUser("Martins", welcomeMessage, offerService)


//write a program that will explain about yourself
//your name
//your school and course
//company you will like to work for


function greetUser(name, firstCallback, secondCallback) {
    console.log(`Hello, I'm ${name}`)
    firstCallback()
    secondCallback()
}

const SchoolandCourse = () => {
    console.log(`I'm learning Frontend Development at New Horizons`)
}

const company = () => {
    console.log(`I'd love to work with Google.`)
}


greetUser("Sophia",SchoolandCourse, company)