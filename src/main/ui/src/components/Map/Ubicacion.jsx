import React from 'react'

const Ubicacion = () => {
  return (
    <div className='location'>
        <h1>UBICACIÓN</h1>
        <p>DIRECCIÓN</p>
        <p>AV 742 EVERGREEN</p>
        <h2>TELÉFONOS:</h2>
        <p>xxx-xxxxxx/WHATSAPP</p>
        <h2>HORARIOS</h2>
        <p>18:00 A 3:00</p>
        <p>MIÉRCOLES A DOMINGO</p>
    <div className='map'>
        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210146.68168877432!2d-58.573383207134555!3d-34.615743688997895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1648968055832!5m2!1ses-419!2sar" loading="lazy" />
    </div>
  
    </div>
  )
}

export default Ubicacion