import React from "react";
import { useCard } from "./useCard";

export default function Card() {
  const {state} = useCard()
  
  return (
    <>
      <form >
        <label htmlFor="number"></label>
        <input id="number" placeholder="Number Card" />
        {/* // ? aquí poner imagenes de las tarjetas en la comprobación */}
        <label htmlFor="month"></label>
        <input id="month" placeholder="xx" />
        <label htmlFor="year"></label>
        <input id="year" placeholder="xx" />
        <label htmlFor="seguridad"></label>
        <input id="seguridad" placeholder="xxx" />
        <label htmlFor="fullName"></label>
        <input id="fullName" placeholder="Full Name" />
        <label htmlFor="typeID">Tipo de documento </label>
        <select id="typeID">
          {state.type.map((s, i) =>
            <option key={i} value={i}>{s}</option>
          )}
        </select>
        <label htmlFor="idNumber"></label>
        <input id="idNumber" placeholder="Id Number" />
        <label htmlFor="email"></label>
        <input id="email" placeholder="example@company.com" />
        <button type="submit">CONFIRMAR</button>
      </form>
    </>
  )
}