import './App.css'
 import {FaBeer} from 'react-icons/fa';
import Navbar from './components/Navbar/Navbar';
import Carrousel from './components/Carrousel/Carrousel';
import About from './components/about/about';
import Menu from './components/Menu/Menu';
import Cervezas from './components/Dishes/Cervezas';
import Picada from './components/Dishes/Picada';
import Pizza from './components/Dishes/Pizza';


import React, {useState} from "react";
{/*import Reservation from "./components/Reservation/Reservation"
import EstadoLog from './components/Login/EstadoLog';
import Logout from "./components/Login/componentLogin/Logout";
import firebaseApp from "../src/credenciales";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import CardBeer from './components/Dishes/CardBeer';*/}

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login/Login";

import Ubicacion from './components/Map/Ubicacion';



{/*const auth = getAuth(firebaseApp);*/}

function App() {
  {/*const [userGlobal, setUserGlobal] = useState(null);

 onAuthStateChanged(auth, (userFirebase)=>{
   if(userFirebase){
        setUserGlobal(userFirebase);
   }else{
     //Si no hay sesión iniciada
      setUserGlobal(null);
   }
 })*/}

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

     {/*} <h1><FaBeer /> Beer Time - Landing Page <FaBeer /></h1>*/}
<Login/>
  
    </>
  )  
}

export default App
