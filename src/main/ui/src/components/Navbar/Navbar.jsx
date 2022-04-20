import React from 'react';
import logo from "../../assets/img/logo.png";
import "./style.css";
import { Link } from 'react-router-dom';
import log from "../Login/img/log.png"

const Navbar= () => {
  return (
    <>
    <nav className="navbar nav-menu navbar-expand-lg navbar-dark">
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
          <Link className="nav-link" to={"/Home"}>HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/About"}>QUIÉNES SOMOS</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={"/menu"}>MENÚ</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={"/"}>RESERVA</Link>
        </li>
        <li className="nav-item">
        <a className="nav-link" href='#Map'>UBICACIÓN</a>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={"/"}>CONTACTO</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link log" to={"/login"}>LOG IN
          <img src={log} alt="..."/>
        </Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
</>
  )
}

export default  Navbar


