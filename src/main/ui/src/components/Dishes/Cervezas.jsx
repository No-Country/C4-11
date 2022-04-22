import React from 'react';
import CardBeer from './CardBeer';
import dataBeer from ".././Dishes/DataBeer"
import Menu from '../Menu/Menu';

const Cervezas = () => {
  return (
    <>
      <Menu />
      {
        dataBeer.map(({ src, description }, index) => (
          <CardBeer
            src={src}
            description={description}
            key={index}
          />
        ))
      }
    </>
  )
}

export default Cervezas