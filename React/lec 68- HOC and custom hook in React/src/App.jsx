import React from "react";
import { AuthDashboard } from "./components/Dashboard";
import withAuth from "./utils/withAuth";
import Navbar from "./components/Navbar";
import  { AuthProfile } from "./components/Profile";
import { Route, Routes } from "react-router";

function App() {
  let user= {
    
    name : "Ritesh",
    role : "student devloper"
  }
  return (
    <div>
      {/* <Dashboard /> */}
      <Navbar />      
      {/* <AuthDashboard /> */}
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/dashboard" element={<AuthDashboard/>} />
        <Route path="/profile" element={<AuthProfile {...user}/>} />
      </Routes>

    </div>
  );
}

export default App;
