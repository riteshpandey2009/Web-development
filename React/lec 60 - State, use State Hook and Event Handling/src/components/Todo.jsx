import { useState } from "react";

function Todo() {
  let [value, setValue] = useState("");
  let [todos, setTodos] = useState(["todo1", "todo2", "todo3"]);
  function printValue(e) {
    setValue(e.target.value)
  }

  function addTodo(e) {
    if (!value.trim()) {
      return;
    }
    e.preventDefault();
    setTodos((prev) => [...prev, value]);
    setValue("")

  }
  return (
    <div>
      <h1>Todo</h1>
      <form action="" onSubmit={addTodo}>
        <input type="text" value={value} onChange={printValue} />
        <button>add</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todo;
