import React from "react";
import { useCard } from "./useCard";
import { textCheck } from "../../utils/regex";

export default function Card() {
  const { state, setCardNumber, setExpMonth, setExpYear, setFullName, setIdNumber, setEmail, validateInput, cleanErrors } = useCard();
  const validateEmail = () => {
    cleanErrors();
    validateInput(v => textCheck.email.test(v) ? "Mail incorrecto": '')
  }
  console.log(state);
  return (
    <>
      <ul className='errors'>
        {state.errors.map((error, index) => (
          <li key={`e-${index}`}> {error} </li>
        ))}
      </ul>
      <form onSubmit={()=>console.log("Aqui muestro la reserva completa")}>
        <label htmlFor="number"></label>
        <input id="number" placeholder="Number Card" onBlur={setCardNumber} />
        {/* // ? aquí poner imagenes de las tarjetas en la comprobación */}
        <label htmlFor="expMonth"></label>
        <input id="expMonth" placeholder="MM" onBlur={setExpMonth} />
        <label htmlFor="expYear"></label>
        <input id="expYear" placeholder="YY" onBlur={setExpYear} />
        <label htmlFor="seguridad"></label>
        <input id="seguridad" placeholder="xxx" />
        <label htmlFor="fullName"></label>
        <input id="fullName" placeholder="Full Name" onBlur={setFullName} />
        <label htmlFor="typeID"></label>
        <select id="typeID">
          {state.type.map((s, i) =>
            <option key={i} value={i}>{s}</option>
          )}
        </select>
        <label htmlFor="idNumber"></label>
        <input id="idNumber" placeholder="Id Number" onBlur={setIdNumber} />
        <label htmlFor="email"></label>
        <input id="email" placeholder="example@company.com" onBlur={setEmail} />
        <button type="submit">CONFIRMAR</button>
      </form>
    </>
  )
}