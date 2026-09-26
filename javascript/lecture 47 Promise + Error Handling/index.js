
// async function fun2() {
//     console.log("async function");
//     return 11 //fulfilled function
// }

// function fun1(){
//     console.log("Normal function");
//     return 10
// }
// fun2().then((data)=>{
//     console.log(data);
// })
// console.log(fun2());
// console.log(fun1()); 

// console.log("a");

// async function fun3() {
//     return "helooo"
// }
// function fun4(){
//     return Promise.resolve("hii")
// }

// // fun3().then((data) => {
// // console.log("hoo gya");
// // })

// console.log("1");

// async function fun5() {
//     // fun3().then((data) => {
//     //     console.log("hoo gya");
//     // })

//     console.log("2");
//     let data = await fun3()
//     console.log("3");
//     let data2 = await fun4()
//     console.log("4");
//     console.log(data , data2);
// }
// console.log("Ritesh");

// fun5()

// console.log("5");


// console.log("a");

// async function random() {


//     console.log("b");

//     await 1;

//     console.log("c");

// }

// random()

// console.log("d");




// let data;

// async function userData() {
//     return {name : "ritesh"}
// }

// function fun4() {
//     return Promise.resolve("hii")
// }


// async function fun5() {


//     data = await userData()

//     let data2 = await fun4()

//     console.log(data2 , data.name);
// }


// fun5()


// let data;

// async function userData() {
//     return { name: "ritesh" }
// }

// function fun4() {
//     return Promise.reject("Error !! Aya hai !!")
// }


// async function fun5() {

//     try {

//         data = await userData()

//         let data2 = await fun4()

//         console.log(data2, data.name);

//     } catch (error) {
//         console.log(error);

//     } finally {
//         console.log("Mujhe fark nahi padta code mai Error hai ya nahi hai !!");
//     }

// }
// fun5()


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

            let isPaymentSussesful = true;
            if (isPaymentSussesful) {
                console.log(`payment intialized , Amount : ${price}`);
                resolve()
            }
            else {
                reject("Bhaiya Payment Failed.")
            }

        }, 5000)
    })
}


async function orderFood() {

    try {
        let price = await searchPizza()
        await addToCart()
        await payment(price)
        console.log("Bas aa hi gya pizza");
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Thank you for visiting our store !!");
    }

}

orderFood()