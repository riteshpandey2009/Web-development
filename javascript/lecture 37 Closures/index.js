

// function outter() {
//     const a = 5;
//     function inner() {
//         console.log(a);

//     }
//    return inner;
// }
// const response = outter();
// response();


function outter() {
    let count = 0;
    function counter() {
        count += 1
        console.log(count);
    }
    return counter
}
const counter = outter();
counter()
counter()

