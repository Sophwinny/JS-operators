//simply means waiting for an operation to be executed while fetching data to perform other actions
//fetch data simply means to get data from the backend
//setTimeout, a built in js that accepts 2 parameters

setTimeout(() => {
    console.log("this will log in two seconds")
}, 7000) //means 2 seconds


function greet(){
    console.log("hello from greet function")
}
setTimeout(greet, 7000)

setTimeout(() => {
    console.log("data fetched")
}, 2000)

console.log(`data fetching`)

setTimeout(() => {
    console.log("datas")
}, 4000)

const sampleData = [
    {id:1, name: "item 1", description: "Description for item 1"},
    {id:2, name: "item 2", description: "Description for item 2"},
    {id:3, name: "item 3", description: "Description for item 3"},
]

async function fetchData() {
    console.log("Fetching data ........")

    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(sampleData)
            console.log("data successfully fetched", sampleData)
        }, 2000)
    });
}

//fetchData();

async function displayData() {
    const dataList = document.getElementById('data-list')
    try {
        const data = await fetchData()
        const listItems = data.map(item => `<li>${item.name}:
            ${item.description}</li>`)
            dataList.innerHTML = listItems;

    } catch (error){
        console.log('the error in the code is:', error)
    }
    
}

displayData()

