import React from 'react';
import dataPizza from ".././Dishes/DataPizza"
import CardPizza from './CardPizza';
import Menu from '../Menu/Menu';

const Pizza = () => {
  return (
    <>
    <Menu/>
        <div className='title'>
          <h2>PIZZAS</h2>
        </div>
    {
      dataPizza.map(({src, description}, index)=>(
        <CardPizza
        src={src} 
        description={description} 
        key={index}
        />
      ))
    }
  </>  
  )
}

export default Pizza