import { use, useState } from "react";

function Product({ name }) {
  const [quantity, setQuantity] = useState(0);
  return (
    <div>
      <h2>{name}</h2>

      <button onClick={() => setQuantity((prev) => prev + 1)}>
        Quantity :{quantity}
      </button>
    </div>
  );
}

function Key() {
  const [products, setProducts] = useState([
    { id: 1, name: "Mouse" },
    { id: 2, name: "Moniter" },
    { id: 3, name: "keyboard" },
    { id: 4, name: "headphone" },
    { id: 5, name: "Speaker" },
  ]);

  function removeFirstprd() {
    setProducts((prev) => prev.slice(1));
  }

  return (
    <>
    {/* key should always pass where we are rendering not at the elememt */}
      <ul>
        {products.map(({ id, name }) => {
          return <Product key={id} name={name} />;
        })}
      </ul>

      <button onClick={removeFirstprd}>Remove first prd</button>
    </>
  );
}

export default Key;
