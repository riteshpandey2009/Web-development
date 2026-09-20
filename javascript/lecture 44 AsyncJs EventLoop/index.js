// console.log("Task 1");

// console.log("Task 2");

// let startTime = Date.now()
// while(Date.now()-startTime <10000){

// }
// console.log("Task 3");

// console.log(globalThis);
// console.log(document);

// console.log("task 1");


// setTimeout(function cb() {
//     console.log("Task 2");
//     let startTime = Date.now()
//     while (Date.now() - startTime < 10000) {

//     }
// }, 0)
// console.log("task 3");
// console.log("task 1");
// setTimeout(() => {
//     console.log("task 2");
// }, 4000);

// setTimeout(() => {
//     console.log("task 4");
// }, 1000);

// setTimeout(() => {
//     console.log("task 5");
// }, 2000);

// console.log("task 3 ");

// let count = 1
// let id = setInterval(function () {
//     count++;
//     if (count > 5) {
//         clearInterval(id)
//     }
//     console.log("hii");


// } , 1000)

const body = document.querySelector("body")

let colorStr = "0123456789abcdef"



setInterval(() => {
    let color = ""
    for (let i = 0; i < 6; i++) {
        let randomValue = Math.floor(Math.random() * colorStr.length)
        color = color + colorStr[randomValue]
        
    }
    body.style.backgroundColor = `#${color}`
}, 100)

