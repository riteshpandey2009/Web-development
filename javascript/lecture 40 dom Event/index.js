

// let btn = document.querySelector("#reveal-gift");
// let h1 = document.querySelector("#gift");

// function revealGift(event) {
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.currentTarget);
//     h1?.classList.remove("hidden")
// h1?.classList.toggle("hidden")
// h1?.classList.add("visible")
// }
// btn?.addEventListener('click',function(){
//     console.log("hellooo hello mic checkkk");
// })

// btn?.addEventListener('click',() => {
//     revealGift()
// })

// btn?.addEventListener('click', revealGift)


// btn?.addEventListener('mouseover',() => {
//     revealGift()
// })

// btn?.addEventListener('dblclick',() => {
//     console.log("hellooo hello mic checkkk");
// })

// let btn1 = document.querySelector("#press");


// let counter = 0

// function fun1(e)  {

//     if (counter < 3) {
//         console.log(e);
//         counter++;
//     }

//     else {
//         btn?.removeEventListener("click", fun1)
//     }
// }

// btn1?.addEventListener('click', fun1)


// let outer = document.querySelector("#outer");
// let inner = document.querySelector("#inner");
// let btn2 = document.querySelector("#btn2");

// outer?.addEventListener('click', (e)=>{
//     e.stopPropagation()
//     console.log("Outer");
// })

// inner?.addEventListener('click', (e)=>{
//     e.stopPropagation()
//     console.log("Inner");
// })

// btn2?.addEventListener('click', (e)=>{
//     e.stopPropagation()
//     console.log("Button");
// })

let products = [
    {
        id: "1",
        name: "Iphone 20 ",
        price: 123423,
        imageUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX466_.jpg"
    },
    {
        id: "2",
        name: "samsung 200 ",
        price: 123434,
        imageUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX466_.jpg"
    },
    {
        id: "3",
        name: "nokia 15",
        price: 1234,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeVju1gTjxt0aOLyrTkFNQz4nVL_1XevipihvOVy2qdQLgDQrQDzQBCDsA&s=10"
    },
    {
        id: "4",
        name: "poco 20 ",
        price: 12345,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGaMufePCr41vWA_9KeQgf2AKBNFmaEpCrKiyAggSWlg&s=10"
    },
    {
        id: "5",
        name: "oppo A6x 5g",
        price: 18000,
        imageUrl: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/oppo/494742341/0/uKCOyWnaUL-8Xd9o2-XZE-OPPOA6x5G-494742341-i-1.jpg"
    }


];

let productList = document.querySelector("#product-list")

products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("singleProduct");

    card.dataset.productId = product.id;
    const dltBtn = document.createElement("button");
    dltBtn.textContent = "Remove product "

    const dltBtn1 = document.createElement("button");
    dltBtn1.textContent = "Add to card"

    dltBtn.addEventListener("click", (e) => {
        card.remove()
        // console.log("Brand name:",product.name , "Price" ,product.price);
    })
    card.innerHTML = `<div>

            <img src="${product.imageUrl}" alt="">

        </div>

        <div class="productDetail">

            <p>${product.name}</p>

            <p>${product.price}</p>
            
        </div>`
    card.append(dltBtn)
    card.append(dltBtn1)

    productList?.append(card)
})

productList?.addEventListener("click", (e) => {
    e.stopPropagation()
    const dltBtn = e.target;
    // @ts-ignore
    // console.log(dltBtn.parentElement);
    // @ts-ignore
    // console.log(dltBtn.tagName);
    // @ts-ignore
    // console.log(dltBtn.textContent);
    // @ts-ignore
    // console.log(dltBtn.parentElement.dataset.productId);
    // // @ts-ignore
    if (e.target.tagName == "Remove product" && dltBtn.tagName == "BUTTON") {
        // @ts-ignore
        // e.target.parentElement.remove();
        // dltBtn.closest(".singleProduct").remove(); 
    }

   
})