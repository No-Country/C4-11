import React from 'react';
import Pizza1 from "../../assets/img/pizza_1.png";
import Pizza2 from "../../assets/img/pizza_2.png";
import Pizza3 from "../../assets/img/pizza_3.png";
import Pizza4 from "../../assets/img/pizza_4.png";

const Pizza = () => {
  return (
    <>
    <div className='title'>
        <h2>Pizzas</h2>
    </div>
    <div className='cards-dishes'>
      <div className="cards">
          <div className='image'>
            <img src={Pizza1} className="card-img-top" alt="..."/>
          </div>
      <div className="card-body-dishes">
        <p className="card-text">Pizza especial</p>
      </div>
    </div>

    <div className="cards">
          <div className='image'>
            <img src={Pizza2} className="card-img-top" alt="..."/>
          </div>
      <div className="card-body-dishes">
        <p className="card-text">Pizza especial</p>
      </div>
    </div>

    <div className="cards">
          <div className='image'>
            <img src={Pizza3} className="card-img-top" alt="..."/>
          </div>
      <div className="card-body-dishes">
        <p className="card-text">Pizza especial</p>
      </div>
    </div>

    <div className="cards">
          <div className='image'>
            <img src={Pizza4} className="card-img-top" alt="..."/>
          </div>
      <div className="card-body-dishes">
        <p className="card-text">Pizza especial</p>
      </div>
    </div>

    <div className="cards">
          <div className='image'>
            <img src={Pizza1} className="card-img-top" alt="..."/>
          </div>
      <div className="card-body-dishes">
        <p className="card-text">Pizza especial</p>
      </div>
    </div>

    <div className="cards">
          <div className='image'>
            <img src={Pizza2} className="card-img-top" alt="..."/>
          </div>
      <div className="card-body-dishes">
        <p className="card-text">Pizza especial</p>
      </div>
    </div>
    
    </div>
  </>  
  )
}

export default Pizza