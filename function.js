//function: a block of codes that can perform an action and is reusable or can be reused. There are 2 major types. 

//1. Function declaration(starts with function keyword and accept parameters and returns an output.)
function functionName(parameters) {
    // code to be executed
}

function greet(name) {
    console.log("Hello, " + name);
}

greet("Sophie."); //output: Hello, Sophie.

function add(a,b) {
    return a + b;
}
const sum = add(4,5)
console.log(sum);


function multipy(d, e, c) {
    return d * e * c;
}
const product = multipy(4, 3, 2)
console.log(product);


//Function Expression (a type of function that is assigned into a variable and the variable becomes the name of the function)
const greetName = function(parameters) {
    //code to be executed
};


const greet2 = function(name) {
    console.log("Hello, " + name);
};
greet2("John.");


const plus= function(c,d) {
    return c + d;   
};
const sum2 = plus(12,5);
console.log(sum2);


const multiply2 = function(c,d) {
    alert("Hello World!")
    return c * d;
};
    const product2 = multiply2(4,5);
    console.log(product2);

    
const greet3 = function(name, course,school) {
    console.log("Hello," + name , "I'm a" + course, "at" + school);
};

greet3(" Jessica." , " Frontend Developer", " New Horizons.");





