import React, { useReducer } from "react";
import reducer from "./reducerCard"
const state = {
  cardNumber: undefined,
  expire: undefined,      // array de 2 campos
  ccv: undefined,
  fullName: undefined,
  type: ["dni", "id", "LE", "LL"],
  idNumber: undefined,
  email: undefined
}

export default function Card() {
  const [card, dispatch] = useReducer(reducer, state)
  console.log(card)
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
          {card.type.map((s, i) =>
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