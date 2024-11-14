//Array Method- how you can manilpulate the data by adding, removing etc
const fruits = ["Apple", "Banana", "Cherry"]

//Types of Array Methods 
//1. Push(adding to the end)
fruits.push("mango");
console.log(fruits);//["Apple", "Banana", "Cherry", "Mango"]

//2. Unshift(adding to the beginning of the array)
fruits.unshift("Elderberry");
console.log(fruits); //["Elderberry", "Apple", "Banana", "Cherry"]

//3. Pop(removing from the end)
fruits.pop();
console.log(fruits); //["Elderberry", "Apple", "Banana", "Cherry"] 

//4. Shift(removing from the beginning)
fruits.shift();
console.log(fruits); //["Apple", "Banana", "Cherry"]

//5. Splice(removing from a specific position)
fruits.splice(1,1); //removes 1 element at index 1
console.log(fruits); //["Apple", "Cherry"]

//Modifying Elements- shows how to change elements in an array
fruits[1] = "Blueberry";
console.log(fruits); //["Apple", "Blueberry"]

fruits.splice(2, 0, "coconut")
console.log(fruits);

let array = [1, 2, 3, 4, 5, 6]
array.splice(3, 3) //2 is the position, while 3 is how any numbers you want to be removed
console.log(array);

//Iterating Over Arrays- introduce different ways to loop through arrays.

//Using for Loop
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//Using for Each
fruits.forEach(function(fruit){
    console.log(fruit);
})

//Common Array Methods- explain some useful array methods like maps, filter, reduce, find and includes.

//map
let uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercasedFruits); //["APPLE", "BLUEBERRY"]

const add = (a, b) => a + b
add(2,4)

//filter
let longFruits = fruits.find(fruit => fruit)

//find
let foundFruit = fruits.find(fruit => fruit === "Apple");
console.log(foundFruit); //"Apple"

//includes
let hasCherry = fruits.includes("Cherry");
console.log(hasCherry); //false

// 8. Combining Arrays
//Show how to concatenate arrays using concat.
let moreFruits = ["Fig", "Grape"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); //["Apple", "Blueberry", "Fig", "Grape"]

//9. Sorting Arrays
//Explain how to sort arrays with sort
let sortedFruits = allFruits.sort();
console.log(sortedFruits); //["Apple", "Blueberry", "Fig", "Grape"]

//10. Reversing Arrays
let reversedFruits = allFruits.reverse();
console.log(reversedFruits); //["Grape", "Fig", "Blueberry", "Apple"]

//Original Array
const numbers2 = [1, 2, 3, 4, 5]

// Using map to create a new array with each element doubled
const doubledNumbers = numbers2. map(number => number * 2);
console.log(doubledNumbers);

const people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
];

//Using map to create a new array with just the names of the people
const names = people.map(person =>person.name);
console.log(names); //["Alice", "Bob", "Charlie"]

const ages = people.map(person =>person.age);
console.log(ages); //["Alice", "Bob", "Charlie"]

//JSON javascript object notation has key and values stored in an array which can contain an object