import React from 'react';
import dataPicada from './DataPicada';
import Menu from '../Menu/Menu';
import CardPicada from './CardPicada';

const Picada = () => {
  return (
    <><Menu/>

    {
      dataPicada.map(({src, description}, index)=>(
        <CardPicada
        src={src} 
        description={description} 
        key={index}
        />
      ))
    }
  </>  
  
  )
}

export default Picada