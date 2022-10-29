

// fetch('https://jonplaceholder.typicode.com/users').then((response) => response.json()).then((data) => console.log(data)).catch(error => console.log(error))
//promise chaning


async function fetchUsers() {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()

        console.log(dat)
    }
    catch (error) {
        console.log(error)
    }




}
fetchUsers().then().catch()