import './App.css'
import React from 'react';


import Navbar from './components/Navbar/Navbar';
import Carrousel from './components/Carrousel/Carrousel';
import About from './components/about/about';
import Menu from './components/Menu/Menu';
import Cervezas from './components/Dishes/Cervezas';
import Picada from './components/Dishes/Picada';
import Pizza from './components/Dishes/Pizza';


import React, {useState} from "react";

import EstadoLog from './components/Login/EstadoLog';
import Logout from "./components/Login/componentLogin/Logout";


import CardBeer from './components/Dishes/CardBeer';*/}

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login/Login";

import Ubicacion from './components/Map/Ubicacion';


function App() {
 

  return (

      <>
      <Router> 
       <Navbar/>   
        <Routes>
          <Route exact path="/Home" element={<Carrousel/>}/>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/Menu" element={<Menu/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/Picada" element={<Picada/>}/>
          <Route exact path="/Pizza" element={<Pizza/>}/>
          <Route exact path="/Cervezas" element={<Cervezas/>}/>
          <Route exact path="/Ubicacion" element={<Ubicacion/>}/>
        </Routes>
      </Router>

<Login/>
  
    </>
  )  

}



export default App
