// @ts-nocheck

// function fun1(callback){
//     console.log("hii");
//     callback( )
// }

// function cb(){
//     console.log("This is the callback fuction");
// }
// fun1(cb)

// let arr =["a" , "b" , "c","d"]
// arr.forEach()
// arr.map()

// function a(){
//     function b(){

//     }
//     return b
// }


function searchPizza(cb1){
    console.log("Pizza Searching ");
    setTimeout(function(){
        console.log("Here is the pizza menu");
        let price = 500;
        cb1(price)
    },2000)
}

 searchPizza(function (price){
    console.log(price);
 })
