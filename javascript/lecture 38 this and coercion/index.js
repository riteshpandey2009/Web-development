// "use strict"
// let name1 =" hello "
// console.log(name1);

// let student ={
//     name: "Ritesh",
//     printName : function(){
//         console.log(" hii ,",this.name);
//     }
// }
// let result = student.printName;
// result();

// function fun1(){

//     let name = "ramu";

//     function fun2(){
//         console.log(name);
//     }
//     return fun2;
// }

// let result2 = fun1();

// result2()

// console.log(this);

// console.log( global === globalThis);

// let a = 7;
// console.log("normal",this.a);


// let name = "something"
// let product = {
//     name: "iphone",
//     printName: function () {
//         const print = () => {
//             console.log(this.name);

//         }
//         print()
//     }
// }

// product.printName()



var name = "something"
let product = {
    name: "iphone",
    printName: () => {
        console.log(this.name);

    }

}

product.printName()




// function fun1(){
//     console.log("function",this.a);

// }
// fun1()