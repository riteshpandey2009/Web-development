import { Product } from "./Product";

let book = [
    {
        title :"Panchtratra",
        price: 1234543
    }
]

 function Body() {
 return (
     <div style={{ backgroundColor : "yellow", color: "black" }}>
       {book.map(({ title , price }, i) => {
         return <Product key={i} title={title} price={price} />;
       })}
     </div>
   );
}

export default Body