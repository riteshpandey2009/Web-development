
// let h1 = document.getElementById("h1")
// let h1 = document.querySelector("h1")
// let h1 = document.querySelector("#h1")
// let h1 = document.querySelector(".h1")
// let h1 = document.querySelectorAll("#h1")
// console.log(h1);

// let p = document.querySelector("p")

// p.textContent="<h2>Hello Dostoo </h2>"
// p.innerHTML ="<h2>Hello Dostoo </h2>" //very very risky

// console.log(p.textContent);
// console.log(p.innerHTML);
// console.log(p.innerText);
// console.log(p.innerHTML);



// p.setAttribute("style", "background-color : pink; font-size : 5rem")

// let btn = document.querySelector("#btn")
// btn.setAttribute("disabled" , "true")
// btn.textContent="Remove";
// let res=p.getAttribute("id")
// console.log(res);


// p.removeAttribute("style")

// p.classList.add("random");
// p.classList.remove("random");
// p.classList.toggle("random");

// console.log(p.classList.contains("random"));

// p.style.backgroundColor = "red"
// p.dataset.hello ="hii"



// let div = document.createElement("div")
// let div2 = document.createElement("div")
// div.textContent ="hello"
// console.log(div);

// div.textContent="Hello"
// div2.textContent="Div 2"

let body = document.querySelector("body")
// console.log(body);
// body?.appendChild(div)

// body?.append(div,div2) //insert in last in body
// body?.prepend(div,div2) // insert in start of body


let products = [
    {
        name: "Iphone 20 ",
        price: 123423,
        imageUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX466_.jpg"
    },
    {
        name: "samsung 200 ",
        price: 123434,
        imageUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX466_.jpg"
    },
    {
        name: "nokia 15",
        price: 1234,
        imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeVju1gTjxt0aOLyrTkFNQz4nVL_1XevipihvOVy2qdQLgDQrQDzQBCDsA&s=10"
    },
    {
        name: "poco 20 ",
        price: 12345,
        imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGaMufePCr41vWA_9KeQgf2AKBNFmaEpCrKiyAggSWlg&s=10"
    },
    {
        name: "oppo A6x 5g",
        price: 18000,
        imageUrl : "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/oppo/494742341/0/uKCOyWnaUL-8Xd9o2-XZE-OPPOA6x5G-494742341-i-1.jpg"
    }


]

let productList = document.querySelector("#product-list")

products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("singleProduct");

    card.innerHTML = `<div>
            <img src="${product.imageUrl}" alt="">
        </div>
        <div class="productDetail">
            <p>${product.name}</p>
            <p>${product.price}</p>
        </div>`

    productList?.append(card)
})
let h2 = document.querySelector("#h23")

let clone = productList?.cloneNode(true);

// console.log(clone);

const iteams =  productList?.children

// productList?.insertBefore(h2 , iteams[2])
// iteams[2].after(h2)