
// console.log("a");

const p = new Promise(function (resolve, reject) {

    resolve("Hii")
    // reject("Server down!!")
})
// console.log(p);
// console.log(typeof p);
p.then(function onFulifilled(val) {
    console.log(val);
}, function onRejected(val) {
    console.log(val);
}) 
