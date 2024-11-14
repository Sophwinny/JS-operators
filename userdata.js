//function to fetch user data using async and await

async function fetchUserData(params) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!response.ok){
        throw new Error('User data contains some error')
    }
    return response.json();
}

//function to display data in html
async function displayUserData() {
    const userList = document.getElementById('user-list');
    try{
        const users = await fetchUserData();
        const listItems = users.map(user => `<li>${user.name} - ${user.email})</li>`)
        userList.innerHTML = listItems;
    } catch(error){
        console.log('error fetching data', error);
        userList.innerHTML = '<li> Error Fetching User Data. Please try again later. </li>'
    }
}

displayUserData();