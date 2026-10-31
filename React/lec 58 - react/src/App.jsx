let colors = ["red", "green", "yellow", "black"];
let user = {
  name: "ritesh",
  age: 18,
  isOnline: true, 
};
function printName() {
  console.log(user.name);
}

function App() {
  return (
    <>
      <div>Hello</div>
      <div>hii</div>
      <div>5+6</div>
      <div>{5 + 6}</div>
      <ul>
        {colors.map((color) => {
          return <li>{color}</li>;
        })}
      </ul>

      <p>{user.isOnline ? `${user.name} is online ` : `${user.name} is offilne `}</p>
      <p>{user.age ? `${user.name} is greater than or equal to 18 `:`${user.name} is less than 18`}</p>

      <button className="" onClick={printName}>Click Me</button>
      <img src="" alt="" />
      <br />
    </>
  );
}

export default App;
