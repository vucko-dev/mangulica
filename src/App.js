import './App.css';
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Pocetna from "./components/Pocetna";
import OMangulicama from "./components/Omangulicama";
import Zdravlje from "./components/Zdravlje";
import Galerija from "./components/Galerija";
import Kontakt from "./components/Kontakt";
import Pitanja from './components/Pitanja';

const App = () =>{
  return(
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Pocetna/>} />
        <Route exact path="/oMangulicama" element={<OMangulicama/>} />
        <Route exact path="/zdravlje" element={<Zdravlje/>} />
        <Route exact path="/galerija" element={<Galerija/>} />
        <Route exact path="/pitanja" element={<Pitanja/>} />
        <Route exact path="/kontakt" element={<Kontakt/>} />
      </Routes>
    </>
  )
}

export default App;
