import React from "react";


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Comienzo from "./components/Comienzo";

import Registro from "./paginas/Registro";
import Cursos from "./paginas/Cursos";
import Inicio from "./paginas/Inicio";


function App() {
  return (
    <Router>
      <Navbar />
      <Header />

      <Routes>
        <Route path="/registro" element={<Registro />}  />
        <Route path="/curso1"   element={<Cursos />}  />
        <Route path="/inicio"   element={<Inicio />}  />
        <Route path="/Comienzo"   element={<Comienzo />}  />
      </Routes>
   

      <Footer />
    </Router>


  );
}

export default App;
