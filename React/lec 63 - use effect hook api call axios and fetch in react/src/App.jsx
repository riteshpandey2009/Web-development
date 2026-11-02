import { useEffect, useState } from "react";
import axios from "axios";

function App({ title = "App Component" }) {
  const [productCount, setProductCount] = useState(0);
  const [product, setProduct] = useState([]);
  const [name, setName] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      // let response = await fetch("https://dummyjson.com/products?limit=0");
      // let data = await response.json();
      let {data} = await axios.get("https://dummyjson.com/products?limit=0");
      // console.log(data);
      setProductCount(data.total);
      setProduct(data.products);
      setLoading(false);
    }
    getProducts();
  }, [name]);

  // if (isLoading) {
  //   return <div class="loader"></div>;
  // }

  return (
    <div>
      App-{productCount} , {title}
      <input type="text" onInput={(e) => setName(e.target.value)} />
      <ul>
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          product.map((p) => <li key={p.id}> {p.title}</li>)
        )}
      </ul>
    </div>
  );
}

export default App;
