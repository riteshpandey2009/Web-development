import { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFoundPage from "./components/NotFoundPage";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function Home() {
  return <h1>Home</h1>;
}

function ProductPage() {
  return <h1>Product Page</h1>;
}

function AboutUs() {
  return <h1>About Us</h1>;
}
function Navbar() {
  return (
    <>
      <ul>
        <Link to={"/"}>Home</Link>
        <br />
        <Link to={"/product-page"}>Product Page</Link>
        <br />
        <Link to={"/about-us"}>About Us</Link>
        <br />
        <Link to={"/login"}>Login</Link>
        <br />
        <a href="/contact-us">contact us</a>
      </ul>
      <Outlet />
    </>
  );
}
// <ul>
//       <li onClick={() => setPage("home")}>Home</li>
//       <li onClick={() => setPage("productPage")}>Product Page</li>
//       <li onClick={() => setPage("aboutus")}>About Us</li>
//     </ul>
//     {page == "home" && <Home />}
//     {page == "productPage" && <ProductPage />}
//     {page == "aboutus" && <AboutUs />}

function App() {
  const [page, setPage] = useState("home");

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/contact-us" element={<h1>Contact us page</h1>} />
      <Route path="/login" element={<Login/>} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
