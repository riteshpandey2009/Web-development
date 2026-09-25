
// console.log("a");

// const p = new Promise(function (resolve, reject) {

// resolve("Hii")
// reject("Server down!!")

// })
// console.log(p);
// console.log(typeof p);

// p.then(function onFulifilled(val) {
//     console.log(val);
// }, function onRejected(val) {
//     console.log(val);
// }) 

// const res = p.then(function (val) {
//     console.log(val);
// }, function (val) {
//     console.log(val);
// }) 
//     .then(() => { }, () => { })
//     .then()
//     .then()

// const res = p.then(function (val) {
//     console.log(val);
// })
//     .then(() => { })
//     .then()
//     .then()
//     .catch(function (val) {
//     console.log(val);
// }).finally(function (){
//     console.log("yeah toh hamesa chalega");
// })

// console.log("a");

// const p2 = new Promise(function (resolve, reject) {
//     console.log("b");
//     resolve("helo")
// })

// p2.then(function f2() {
//     console.log("then");
// }).catch(function f3() {
//     console.log("catch");
// }).finally(function f4() {
//     console.log("finally");
// })
// console.log("c");

// const p3 = new Promise(function f1(resolve , reject){
//     resolve()
// })
// setTimeout(function fun3 (){
//     console.log("setTimeout");
// },2000)

// p3.then(function f3 (){
//     console.log("f3 resovle");
// })

// Promise.resolve().then(function f2(){
//     console.log("inside resolve Promise");
// })

function searchPizza() {
    return new Promise(function (resolve, reject) {
        console.log("Pizza Searching ");
        setTimeout(function () {
            console.log("Here is the pizza menu");
            let price = 500;
            // a(price)
            resolve(price)
        }, 2000)
    })

}

function addToCart(price) {
    return new Promise(function (resolve, reject) {
        console.log("Pizza Adding to Cart");
        setTimeout(function () {
            console.log("Pizza Added To cart");
            resolve(price)
        }, 3000)
    })
}

function payment(price) {
    return new Promise(function (resolve, reject) {
        console.log(`payment intialized , Amount : ${price}`);
        setTimeout(function fun3() {

            let isPaymentSussesful = false;
            if (isPaymentSussesful) {
                console.log(`payment intialized , Amount : ${price}`);
                resolve()
            }
            else{
                reject("Bhaiya Payment Failed.")
            }

        }, 5000)
    })
}

// searchPizza().then(function(price){
//     console.log(price);
// })

let res = searchPizza()
res.then(function (price) {
    return addToCart(price)
}).then(function (price) {
    return payment(price)
}).then(function () {
    console.log("Bas aa hi gaye");
}).catch(function (err) {
    console.log(err);
})
