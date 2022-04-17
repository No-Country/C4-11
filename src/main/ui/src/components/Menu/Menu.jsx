import React from 'react';
import Cerveza from "../../assets/img/menu1.png";
import Picada from "../../assets/img/menu2.png";
import Pizza from "../../assets/img/menu3.png";
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
      <>
        <div className='title'>
            <h1>MENÚ</h1>
        </div>
        <div className='cards'>     
        <div className="card" style={{width: "35rem"}}>
            <img src={Cerveza} className="card-img-top" alt="..."/>
            <div className="card-body">
            <Link to={"/cervezas"}><p className="card-text">Cervezas</p></Link>
            </div>
        </div>
        <div className="card" style={{width: "35rem"}}>
            <img src={Picada} className="card-img-top" alt="..."/>
            <div className="card-body">
            <Link to={"/Picada"}><p className="card-text">Picadas</p></Link>
            </div>
        </div>
        <div className="card" style={{width: "35rem"}}>
            <img src={Pizza} className="card-img-top" alt="..."/>
            <div className="card-body">
            <Link to={"/Pizza"}><p className="card-text">Pizzas</p></Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Menu