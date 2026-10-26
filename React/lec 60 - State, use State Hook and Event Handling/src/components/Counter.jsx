import { useState } from "react";

function Counter({printCountValue}) {
  let [value, setValue] = useState(0);

  // let count = 0; //Normal Variable

  function increment() {
    // count++;
    // setValue(++value);
    setValue((prev) => prev + 1);
    printCountValue(value)
  }

  function decrement() {
    // count--; 
    // setValue(--value);
    setValue((prev) => prev - 1);
    printCountValue(value)
  }

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={increment}>+</button>

      <p> {value}</p>

      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
