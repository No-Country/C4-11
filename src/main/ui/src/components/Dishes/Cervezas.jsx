import React from 'react';
import beer1 from "../../assets/img/beer.png";
import beer2 from "../../assets/img/beer2.png";
import beer3 from "../../assets/img/beer3.png";
import beer4 from "../../assets/img/beer3.png";


const Cervezas = () => {
  return (
    <>
    <div className='title'>
        <h2>Cervezas</h2>
    </div>
    <div className='cards-dishes'>
      <div className="cards">
          <div className='image'>
            <img src={beer1} className="card-img-top" alt="..."/>
          </div>
      <div className="card-body-dishes">
        <p className="card-text">Cerveza Artesanal</p>
      </div>
    </div>

    <div className="cards">
          <div className='image'>
            <img src={beer2} className="card-img-top" alt="..."/>
          </div>
      <div className="card-body-dishes">
        <p className="card-text">Cerveza Artesanal</p>
      </div>
    </div>

    <div className="cards">
          <div className='image'>
            <img src={beer3} className="card-img-top" alt="..."/>
          </div>
      <div className="card-body-dishes">
        <p className="card-text">Cerveza Artesanal</p>
      </div>
    </div>

    <div className="cards">
          <div className='image'>
            <img src={beer4} className="card-img-top" alt="..."/>
          </div>
      <div className="card-body-dishes">
        <p className="card-text">Cerveza Artesanal</p>
      </div>
    </div>

    <div className="cards">
          <div className='image'>
            <img src={beer2} className="card-img-top" alt="..."/>
          </div>
      <div className="card-body-dishes">
        <p className="card-text">Cerveza Artesanal</p>
      </div>
    </div>

    <div className="cards">
          <div className='image'>
            <img src={beer1} className="card-img-top" alt="..."/>
          </div>
      <div className="card-body-dishes">
        <p className="card-text">Cerveza Artesanal</p>
      </div>
    </div>
    
    </div>

  </>  
  )
}

export default Cervezas