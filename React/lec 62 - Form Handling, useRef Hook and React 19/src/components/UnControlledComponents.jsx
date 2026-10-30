
function UnControlledComponents() {


  function singup(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
  }

  return (
    <div>
      <h1>Form in React (UnControlled Components)</h1>
      <form action="" onSubmit={singup}>
        <label htmlFor="name">Name : </label>
        <input defaultValue={"ghjkl"} type="text" name="name" id="name" />
        <br />
        <label htmlFor="email">Email : </label>
        <input type="text" name="email" id="email" />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="text"
          name="password"
          id="password"
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UnControlledComponents;
