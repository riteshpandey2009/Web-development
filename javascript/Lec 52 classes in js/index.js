
// function Ofrandom(){
//     const random = ()=>{
//     console.log(this);
// }
// random()
// }

// Ofrandom()


function Product(name,price) {
    this.name = name
    this.price = price
    console.log(this);
}
const p1 = Product("IPhone 23456789 Pro max ultra xtream glaxay new","12344566643")
const p2 = Product("sa   23456789 Pro max ultra xtream glaxay new","12344566643")

// let user = {
//     name:"Ritesh"
// }
// user.phone = "9875456778"
// console.log(user);