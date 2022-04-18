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
        <div className="card">
            <img src={Pizza} alt="..."/>
            <div className="card-body">
            <Link to={"/Pizza"}> <div><p className="card-text">PIZZAS</p></div></Link>
            <div className='description-dish'><p>Variedad en Pizzas</p></div>
            </div>
        </div>  

        <div className="card">
            <img src={Picada} alt="..."/>
            <div className="card-body">
            <Link to={"/Picada"}><div><p className="card-text">PICADAS</p></div></Link> 
            <div className='description-dish'><p>De todo tipo</p></div>
            </div>
        </div>
         
        <div className="card">
            <img src={Cerveza} alt="..."/>
            <div className="card-body">
            <Link to={"/cervezas"}> <div><p className="card-text">CERVEZAS</p></div></Link>
            <div className='description-dish'><p>Clásicas y Artesanales</p></div>
            </div>
        </div>
        <div className='title-dishes'>
        <Link to={"/Cervezas"}><p>CERVEZAS</p></Link>    
        <Link to={"/Pizza"}><p>PIZZAS</p></Link> 
        <Link to={"/Picada"}><p>PICADAS</p></Link> 
        </div>
       
    </div>
    </>
  )
}

export default Menu