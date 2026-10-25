import Body from "./components/Body";
import NewFooter, { Footer as FooterUpdate } from "./components/Footer"; //named import
import Navbar from "./components/Navbar"; //default import
import { Product } from "./components/Product";
import Products from "./components/Products";

const user = {
  name: "Ritesh",
  isLoggedIn: false,
};

const products = [
  {
    title: "Nike shoe",
    price: "₹ 19000",
  },
  {
    title: "Puma shoe",
    price: "₹ 19560",
  },
  {
    title: "Goldstar shoe",
    price: "₹ 1340",
  },
];

function App() {
  return (
    <div>
      <Navbar user ={user} />
      <Products products={products} />
      <Body />
      <FooterUpdate />
      {/* <NewFooter /> */}
    </div>
  );
}

export default App;
