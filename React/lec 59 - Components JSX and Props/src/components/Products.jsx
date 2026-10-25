import { Product } from "./Product";

function Products({products =[]}) {
    if(products.length < 1){
        return;
    }
  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      {products && products.map(({ title, price }, i) => {
        return <Product key={i} title={title} price={price} />;
      })}
    </div>
  );
}
export default Products