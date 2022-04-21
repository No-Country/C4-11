import React from 'react';
import Beer3 from "../../assets/img/beer3.jpg";

const About = () => {
  return (
    <div className='container-about'>
        <div className='content'>
            <h1>QUIÉNES SOMOS</h1>
            <p>Beer Time se encuentra ubicado en Puerto Madero, uno de los principales sitios turísticos de la ciudad de Buenos Aires.</p>
            <p>Desde 30 de febrero de 2019 abrió sus puertas al público.</p>
            <p>Los invitamos a visitarnos, a conocer y disfrutar de una noche junto a sus amigos. </p>
        </div>
        <div className='picture-about'>
            <img src={Beer3} alt="..."/>       
        </div>
    </div>
  )
}

export default About