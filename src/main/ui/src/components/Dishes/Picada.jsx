import React from 'react';
import Picada1 from "../../assets/img/picada.png";
import Picada2 from "../../assets/img/picada2.png";
import Picada3 from "../../assets/img/picada3.png";
import Picada4 from "../../assets/img/picada4.png";

const Picada = () => {
  return (
    <>
    <div className='title'>
        <h2>Picadas</h2>
    </div>
    <div className='cards-dishes'>
      <div className="cards">
          <div className='image'>
            <img src={Picada1} className="card-img-top" alt="..."/>
          </div>
      <div className="card-body-dishes">
        <p className="card-text">Especial para 4 Personas</p>
      </div>
    </div>

    <div className="cards">
          <div className='image'>
            <img src={Picada2} className="card-img-top" alt="..."/>
          </div>
      <div className="card-body-dishes">
        <p className="card-text">Especial para 4 Personas</p>
      </div>
    </div>

    <div className="cards">
          <div className='image'>
            <img src={Picada3} className="card-img-top" alt="..."/>
          </div>
      <div className="card-body-dishes">
        <p className="card-text">Especial para 4 Personas</p>
      </div>
    </div>

    <div className="cards">
          <div className='image'>
            <img src={Picada4} className="card-img-top" alt="..."/>
          </div>
      <div className="card-body-dishes">
        <p className="card-text">Especial para 4 Personas</p>
      </div>
    </div>

    <div className="cards">
          <div className='image'>
            <img src={Picada2} className="card-img-top" alt="..."/>
          </div>
      <div className="card-body-dishes">
        <p className="card-text">Especial para 4 Personas</p>
      </div>
    </div>

    <div className="cards">
          <div className='image'>
            <img src={Picada3} className="card-img-top" alt="..."/>
          </div>
      <div className="card-body-dishes">
        <p className="card-text">Especial para 4 Personas</p>
      </div>
    </div>
    
    </div>

  </>  
  )
}

export default Picada