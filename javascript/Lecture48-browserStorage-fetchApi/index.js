

// localStorage.setItem("num1" , "1");
// localStorage.setItem("num2" , "2");
localStorage.setItem("num3", "3");

// let result = localStorage.getItem("ritesh")
// console.log(result);

// let result2 = localStorage.key(0)
// console.log(result2);

// // let result3 = localStorage.removeItem("num")
// // console.log(result3);
// document.querySelector("#clear-local-storage")?.addEventListener("click", () => {
//     localStorage.clear()
// })
// document.querySelector("#add-session-button")?.addEventListener("click" , ()=>{
//     sessionStorage.setItem("Session", "iteam")
// })



// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     let data = xhttp.responseText;
//     console.log(data);
// };
// xhttp.open("GET", "https://api.github.com/users/riteshpandey2009", true);
// xhttp.send();

// fetch("https://api.github.com/users/riteshpandey2009").
//     then(data => data.json()).
//     then(data => console.log(data))

async function getUser(username = "riteshpandey2009") {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()
    return data;
}

getUser()

document.querySelector("#github-form")?.addEventListener("submit", async (e) => {
    e.preventDefault()

    let username = document.querySelector("#github-username").value

    const data = await getUser(username)

    document.querySelector("#show-profile").innerHTML =`   
        <img src="${data.avatar_url}" alt="">
        <h2>${data.name}</h2>
        <i>username :${data.login}</i>
        <p>${data.bio}</p>
        <p>followers : ${data.followers}</p>
        <p>following : ${data.following}</p>
        <p>public Repos : ${data.public_repos}</p>
        `
        
})

function updateStatus()
{
    document.querySelector("#live-status").textContent = navigator.onLine ? "Online" : "Offline"
}

window.addEventListener("online",updateStatus)
window.addEventListener("offline" , updateStatus)