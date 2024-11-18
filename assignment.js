// // // //write a function that returns difference of 2 numbers
// // // //write a function that will accepts 2 parameters by concatenation

// // // //Assignment Solution
// // // function subtract(p,q) {
// // //     return p - q;
// // // }
// // // const difference = subtract(15,5)
// // // console.log(difference);

// // // function greet(name, course) {
// // //     console.log("Hello" + name, "You are a" + course)
// // //     }
// // //     greet(" Sophia."," Frontend Developer.");

// // // //create 2 buttons on html
// // // //1st button- display button and 2nd button- hide button so they can display on your web 

// // async function fetchUserData() {
// //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
// //     if(!response.ok){
// //         throw new Error('User data contains some error')
// //     }
// //     return response.json();
// // }

// // //function to display data in html
// // async function displayUserData() {
// //     const userList = document.getElementById('user-list');
// //     try{
// //         const users = await fetchUserData();
// //         const listItems = users.map(user => `<li>${user.name} - ${user.email})</li>`)
// //         userList.innerHTML = listItems;
// //     } catch(error){
// //         console.log('error fetching data', error);
// //         userList.innerHTML = '<li> Error Fetching User Data. Please try again later. </li>'
// //     }
// // }

// // displayUserData();

// // Function to display user data in the HTML
// async function displayUserData() {
//     const userList = document.getElementById('user-list');
//     try {
//         const users = await fetchUserData();
//         const listItems = users.map(user => `<li>${user.name} - ${user.email}</li>`).join('');
//         userList.innerHTML = listItems; // Insert the fetched user data into the list
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         userList.innerHTML = '<li>Error Fetching User Data. Please try again later.</li>';
//     }
// }


// Function to fetch user data
async function fetchUserData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('Error fetching user data');
    }
    return response.json();
}

// Function to display user data in the HTML
async function displayUserData() {
    const userList = document.getElementById('user-list'); // Get user-list element
    try {
        const users = await fetchUserData(); // Fetch user data
        const listItems = users.map(user => `<li>${user.name} - ${user.email}</li>`).join(''); // Generate list items
        userList.innerHTML = listItems; // Update HTML content
    } catch (error) {
        console.error('Error:', error); // Log any errors
        userList.innerHTML = '<li>Failed to load user data. Please try again later.</li>'; // Show error in the UI
    }
}

// DOM Elements
const viewButton = document.getElementById('viewButton');
const hideButton = document.getElementById('hideButton');
const userList = document.getElementById('user-list');

// Event listener for "View" button
viewButton.addEventListener('click', () => {
    userList.style.display = 'block'; // Show the user list
    displayUserData(); // Fetch and display user data
});

// Event listener for "Hide" button
hideButton.addEventListener('click', () => {
    userList.style.display = 'none'; // Hide the user list
});
