import { useState } from "react";

function ControlledComponents() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [form, setForm] = useState({ name: "ritesh", email: "riteshp@gmail.com", password: "" });

  function singup(e) {
    e.preventDefault();
    console.log("submitted");
    console.log(form);
  }

  function handleInput(e) {
    // let value = e.target.value.trim();
    // let name = e.target.name

    const { value, name } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <div>
      <h1>Form in React(Controlled Components) - {form.name}</h1>
      <form action="" onSubmit={singup}>
        <label htmlFor="name">Name : </label>
        <input type="text" value={form.name} name="name" id="name" onInput={handleInput} />
        <br />
        <label htmlFor="email">Email : </label>
        <input type="text" value={form.email} name="email" id="email" onInput={handleInput} />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="text"
          name="password"
          id="password"
          onInput={handleInput}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ControlledComponents;
