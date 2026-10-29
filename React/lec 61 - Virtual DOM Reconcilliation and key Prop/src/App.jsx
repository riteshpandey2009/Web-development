import { useState } from "react";
import "./App.css";
import Key from "./components/Key";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <h1>{count}</h1>
      <h1>Hii</h1>
      <h3>Hello</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button> */}
      <Key />
    </div>
  );
}

export default App;
