//@ts-nocheck

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


function searchPizza(cb1) {
    console.log("Pizza Searching ");
    setTimeout(function () {
        console.log("Here is the pizza menu");
        let price = 500;
        cb1(price)
    }, 2000)
}

function addToCart(cb2) {
    console.log("Pizza Adding to Cart");
    setTimeout(function () {
        console.log("Pizza Added To cart");
        cb2()
    }, 3000)
}

function payment(price , cb3){
    console.log(`payment intialized , Amount : ${price}`);
    setTimeout(function(){
        console.log(`payment intialized , Amount : ${price}`);
        cb3()
    },5000)
}

searchPizza(function (price) {
    // console.log(price);
    addToCart(function (){
        payment(price,function(){
            console.log("bass aa hi gya pizza");
        })
    })
})
