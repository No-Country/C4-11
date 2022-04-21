import React from "react";
import { useLocation } from "react-router-dom"

export default function ReservationView () {
  const {state: {reserva}} = useLocation();
  console.log(reserva)
  return <h1>Reservation View</h1>
}