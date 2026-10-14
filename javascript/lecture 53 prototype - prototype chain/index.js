// let user ={
//     name: "ritesh",
//     age: 12
// }
// console.log(user);

// Object.prototype.allInOne= function(){
    // console.log("Mai toh all in one hu");
// }

// Array.prototype.printIteams = function (){
//     for(let i = 0 ; i<this.length ; i++)
//     console.log(this[i]);
// }
// let arr = [1,2,3,4];

// let clr =["red","green","orange"]
// arr.printIteams()
// clr.printIteams()

// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);

// String.prototype.firstTwoCharacters=function(){
    // console.log(this[0]+this[1]);
// }
// "ritesh".firstTwoCharacters()

// "hello".allInOne()
// Number(1).allInOne()

// function random() {

// } 
// random.allInOne()

let common ={
    eat(){
        console.log("eat");
    },
    name:"asdw"
}
let person =Object.create(common)

person.walk = function(){
    console.log("walk");
}

let student = Object.create(person)

student.study = function(){
    console.log("study");
}

console.log(person);
console.log(student);