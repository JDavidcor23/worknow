import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./componentes/home/Home"
import Aliado from "./componentes/Aliado";
import Register from "./componentes/Register";
import Login from "./componentes/Login";

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
