
import React from 'react'
import { Container,BotonesConfirm,TituloH1,DivBotones,ButtonConfirm,Parrafo,Calendar} from "./Elements-Reservation/Elements"

export default function ReservationView (reservation = "nada") {
  console.log(reservation)
  return (
    <Container>
        <div >
            <TituloH1>Datos de la reserva</TituloH1>
        </div>
        <Calendar className='row'>
            <ButtonConfirm className='card col-4'><span>Personas</span>4</ButtonConfirm>
            <ButtonConfirm className='card col-4'><span>Dia</span>30/07</ButtonConfirm>
            <ButtonConfirm className='card col-4'><span>Hora</span>20:30</ButtonConfirm>
        </Calendar>
        <div>
        <Parrafo htmlFor="">$500</Parrafo>   
        <Parrafo htmlFor="">Mesa C6</Parrafo>   
        <Parrafo htmlFor="">Email</Parrafo>   
        </div>
        <DivBotones >
          <BotonesConfirm >Volver al Menu</BotonesConfirm>
          <BotonesConfirm>Crear Usuario</BotonesConfirm>
        </DivBotones>
          
    </Container>
)
  
}