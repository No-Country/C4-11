import React from 'react';
import logo from "../../assets/img/logo.png";
import "./style.css";

const Navbar= () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <a href="/"> 
      <img className="navbar-brand" src={logo} alt="..." />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{marginRight:"60px"}}>
        <li className="nav-item">
          <a className="nav-link" href="#">QUIÉNES SOMOS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">MENÚ</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">RESERVA</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">UBICACIÓN</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONTACTO</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
  )
}

export default  Navbar


