

// localStorage.setItem("num1" , "1");
// localStorage.setItem("num2" , "2");
localStorage.setItem("num3", "3");

let result = localStorage.getItem("ritesh")
console.log(result);

let result2 = localStorage.key(0)
console.log(result2);

// let result3 = localStorage.removeItem("num")
// console.log(result3);
document.querySelector("#clear-local-storage")?.addEventListener("click", () => {
    localStorage.clear()
})
document.querySelector("#add-session-button")?.addEventListener("click" , ()=>{
    sessionStorage.setItem("Session", "iteam")
})
