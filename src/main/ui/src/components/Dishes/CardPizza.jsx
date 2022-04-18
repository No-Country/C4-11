import React from 'react'

const CardPizza = ({src, description}) => {
  return (
    <>

    <div className='cards-dishes'>
      <div className="card-food">
          <div className='image'>
            <img src={src} className="card-img-top" alt="..."/>
          </div>
      </div>   
      <div className="card-body-dishes">
        <p className="card-text">{description}</p>
      </div>
    </div>
 
    </>
  )
}

export default CardPizza