import { useRef } from "react";

function UnControlledComponentsUseRefs() {
  const nameRef = useRef(null);

  function singup(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
    console.log(nameRef.current.value);
    // nameRef.current.focus()
   let nameTag1= nameRef.current
   let nameTag2 = document.querySelector("#name2");
   console.log(nameTag1);
   console.log(nameTag1.value,nameTag2.value);
  }

  return (
    <div>
      <h1>Form in React (UnControlled Components use refs hooks)</h1>
      <form action="" onSubmit={singup}>
        <label htmlFor="name">
          Name :{" "}
        </label>
        <input ref={nameRef} type="text" name="name" id="name2" />
        <br />
        <label htmlFor="email">Email : </label>
        <input type="text" name="email" id="email" />
        <br />
        <label htmlFor="password">Password : </label>
        <input type="text" name="password" id="password" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UnControlledComponentsUseRefs;
