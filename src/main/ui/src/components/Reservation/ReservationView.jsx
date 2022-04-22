import React from "react";
import { useLocation } from "react-router-dom"
import { month, hora, zones } from '../../static.json'
import { Container, BotonesConfirm, TituloH1, DivBotones, ButtonConfirm, Parrafo, Calendar } from "./Elements-Reservation/Elements"

export default function ReservationView() {
  const { state: { reserva } } = useLocation();
  console.log(reserva)
  return (
    <Container>
      <div >
        <TituloH1>Datos de la reserva</TituloH1>
      </div>
      <Calendar className='row'>
        <ButtonConfirm className='card col-4'>
          <span>Personas</span>
          {reserva.seats}
        </ButtonConfirm>
        <ButtonConfirm className='card col-4'>
          <span>{month[reserva.date.getMonth()]}</span>
          {reserva.date.getDate()}
        </ButtonConfirm>
        <ButtonConfirm className='card col-4'>
          <span>Hora</span>
          {hora[reserva.session]}
        </ButtonConfirm>
      </Calendar>
      <div>
        <Parrafo htmlFor="">
          $ {reserva.seats * 700}
        </Parrafo>
        <Parrafo htmlFor="">
          Mesa {zones[reserva.zone]}{reserva.seats}
        </Parrafo>
        {/* // TODO: pasar el mail desde card */}
        <Parrafo htmlFor="">
          Email
        </Parrafo>
      </div>
      <DivBotones >
        {/* // TODO: linkear botones */}
        <BotonesConfirm >
          Volver al Menu
        </BotonesConfirm>
        <BotonesConfirm>
          Crear Usuario
        </BotonesConfirm>
      </DivBotones>
    </Container>
  )
}