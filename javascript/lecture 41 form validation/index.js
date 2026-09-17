// @ts-nocheck

const { use } = require("react");

const form = document.querySelector("#form")
const btn = document.querySelector("#btn");
const username = document.querySelector("#username")
const bio = document.querySelector("#bio")
const charCount = document.querySelector("#character-count")
const checkbox = document.querySelector("#checkbox")
const country = document.querySelector("#country")
const passwordHint = document.querySelector("#passwordHint")
const password = document.querySelector("#pass")
const errorMessage = document.querySelector("#error-message")


const LIMIT = 500;

charCount.textContent = `${LIMIT} character remaining`;

function showError(input,errorMessage){
    input.parentElement.querySelector(".error-message").textContent = errorMessage;
}
function clearError(input){
    input.parentElement.querySelector(".error-message").textContent = ""
}
function isValidUsername(username){
    console.log(username.parentElement.querySelector(".error-message"));
    if(username.value.trim().length === 0){
        errorMessage.textContent = "Enter your name"
        showError(username , "Please enter your name")
        return false; 
    }
    if(username.value.trim().length < 3){
        errorMessage.textContent = "Username atlest contain 3 character"
        return false; 
    }

    clearError(username)
   return true;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // const password = document.querySelector("#pass")?.value;

    const isUsernameValid = isValidUsername(username);


    // const email = document.querySelector("#mail")?.value;
    // console.log({ username: username.value, password :password.value, email });

    if(isUsernameValid){
        console.log("form is valid");
    }else{
        console.log("form invalid");
    }
})

// bio?.addEventListener("input", (e) => {
//     const remaining = LIMIT - bio.value.length;
//     charCount.textContent = `${remaining} character remaining`;
// })

// username?.addEventListener("change", (e) => {
//     console.log("change event" , username.value);
    
// })

// username?.addEventListener("input", (e) => {
//     console.log("input event" , username.value);

// })

// checkbox?.addEventListener("change", (e) => {
//     console.log(checkbox.checked);

// })

// country?.addEventListener("change", (e) => {
//     console.log(country.value)

// })


// username?.addEventListener("focus", (e) => {
//     console.log("input event" , username.value);

// })


// password?.addEventListener("focus", (e) => {
//     passwordHint?.classList.remove("hidden")

// })


// password?.addEventListener("blur", (e) => {
//     passwordHint?.classList.add("hidden")
// })