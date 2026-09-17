// let product1 =["iphone",56678,4.5,75,10]
// console.log(product1['3']);
// let product2 = {
//     name :"Iphone 18 pro max",
//     price : 5668,
//     avgRating : 4.5,
//     totalRevievs : 75,
//     discount : 10,
//     printProductName : function(){
//         console.log(this.name);
//     },
//     printDiscount(){
//         console.log("10%");
//     }
// }
// console.log(product2);

// product2.printProductName()

// console.log(product2['221']);
// console.log(Object.keys(product2)); 
// console.log(Object.entries(product2)); 


// for(value of product1){
//     console.log(value);
// }
// product1.forEach(function(value,index){
//     console.log(value,index);
// })



// function b(num){
//     num()
//     console.log("b");
// }

// b(function a(){
//     console.log("a");
// })

// product1.forEach(function(value , index){
//     console.log(value , index);
// })
// for (value in product2){
//     console.log(product2[value]);
// }

// for (value in product1){
//     console.log(value);
// }

// let product1 =["iphone",56678,4.5,75,10]

// const [a , b , c , d ,e] =["iphone",56678,4.5,75,10]
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

let product2 = {
    name :"Iphone 18 pro max",
    price : 5668,
    avgRating : 4.5,
    totalRevievs : 75,
    discount : 10,
    printProductName : function(){
        console.log(this.name);
    },
    printDiscount(){
        console.log(this.discount);
    }
}
// console.log(product2);
// let {name,price,avgRating,totalRevievs,discount} = product2
// console.log(price ,avgRating);

// for ( [key,value] of Object.entries(product2)){
//     console.log(key,"-",value);
// }

let product1 =["iphone",56678,4.5,75,10]

const [name , price] =["iphone",56678,4.5,75,10]

const[n,p, ...hello] =  ["iphone",56678,4.5,75,10]
// console.log(hello);
let a = [1,2,3]
let b = [4 , 5]
let d = [...a , ...b]
console.log(...d);

// Math.min();
// Math.max()

// function add(...num1){
//     return num1; 
// }

// console.log(add (4 , 5,6 , 8 ,9));

// let {price , }