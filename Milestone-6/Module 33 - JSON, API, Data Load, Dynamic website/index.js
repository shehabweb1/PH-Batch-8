function loadUser(){
    const userURL = 'https://jsonplaceholder.typicode.com/users'
    fetch(userURL)
    .then(res => res.json())
    .then(data => showUser(data))
}

function showUser(users) {
    const userData = document.getElementById('userData');
    for (const user of users){
        const boxDiv = document.createElement("div");
        boxDiv.classList.add("box");

        boxDiv.innerHTML= `
        <h3>${user.name}</h3>
        <p>${user.username}</p>
        <p>${user.email}</p>
        <p>${user.phone}</p>
        `

        userData.appendChild(boxDiv)
    }
}