let name = "Sophia"
let age = 22;
let course = "Web Development"
let school = "New Horizons"

//write your code here
//console.log(`Hello ${name}, you are ${age} years old, studying ${course} at ${school}.`)
console.log("Hello " + name + "," + " you are " + age + " years old, studying " + course + " at " + school + ".")
//concatenate and console your code

let h = ["beans", "rice", "potato", "yam", "garri"]
let i = "potato";

switch(false){
    case h.includes(i):
        console.log(`Yes, it's included`)
        break;
    default:
        console.log(`No, not there`)
};

function add(a, b){
    return a + b;
}

console.log(add(3, 9));

function subtract(p,q) {
    return p - q;
}
console.log(subtract(12, 5));