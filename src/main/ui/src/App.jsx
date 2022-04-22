import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Carrousel from './components/Carrousel/Carrousel';
import About from './components/about/about';
import Menu from './components/Menu/Menu';
import Cervezas from './components/Dishes/Cervezas';
import Picada from './components/Dishes/Picada';
import Pizza from './components/Dishes/Pizza';
import Login from "./components/Login/Login"
import { Footer } from './components/Footer/Footer';
import Reservation from "./components/Reservation/Reservation"
import Card from "./components/Card/Card";
import ReservationView from "./components/Reservation/ReservationView"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Carrousel />} />
          <Route exact path="/Home" element={<Carrousel />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Menu" element={<Menu />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Picada" element={<Picada />} />
          <Route exact path="/Pizza" element={<Pizza />} />
          <Route exact path="/Cervezas" element={<Cervezas />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/Reserva" element={<Reservation date={new Date()} />} />
          <Route exact path="/Card" element={<Card />} />
          <Route exact path="/ReservationView" element={<ReservationView />} />
          <Route path="*" element={<Carrousel />} />
        </Routes>         
        <Footer />
      </Router>
    </>
  )
}

export default App
