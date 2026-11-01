import { useEffect, useState } from "react";

function App({ title = "App Component" }) {
  const [productCount, setProductCount] = useState(0);
  const [product, setProduct] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    async function getProducts() {
      let response = await fetch("https://dummyjson.com/products?limit=0");
      let data = await response.json();
      console.log(data);
      setProductCount(data.total);
      setProduct(data.products);
    }
    getProducts()
  }, [name]);

  return (
    <div>
      App-{productCount} , {title}
      <input type="text" onInput={(e) => setName(e.target.value)} />
      <ul>
        {product.map((p) => (
          <li key={p.id}> {p.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
