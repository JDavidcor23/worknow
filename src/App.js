import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.js";
import Aliado from "./Pages/Aliado";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aliado" element={<Aliado />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
