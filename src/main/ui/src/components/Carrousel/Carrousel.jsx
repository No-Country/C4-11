import React from 'react';
import Beer1 from "../../assets/img/beer1.jpg";
import Beer2 from "../../assets/img/beer2.jpg";
import Beer3 from "../../assets/img/beer3.jpg";

const Carrousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Beer1} className="d-block w-25" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Beer2} className="d-block w-25" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Beer3} className="d-block w-25" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carrousel