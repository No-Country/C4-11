import React from "react";
import { useCard } from "./useCard";
import { textCheck } from "../../utils/regex";
import { Button,InputCardNumber,Email,DniNumber,PickerType,InputExpCcv, InputFullName } from "./Card.elements/Cardselements";

export default function Card() {
  const { state, setCardNumber, setExpMonth, setExpYear, setFullName, setIdNumber, setEmail, validateInput, cleanErrors } = useCard();
  const validateEmail = () => {
    cleanErrors();
    validateInput(v => textCheck.email.test(v) ? "Mail incorrecto": '')
  }
  console.log(state);
  return (
    <div className="container d-flex">
      <ul className='errors'>
        {state.errors.map((error, index) => (
          <li key={`e-${index}`}> {error} </li>
        ))}
      </ul>
      <form  className="row "onSubmit={()=>console.log("Aqui muestro la reserva completa")}>
        <label htmlFor="number"></label>
        <InputCardNumber  className="col-6" id="number" placeholder="Number Card" onBlur={setCardNumber} />
        {/* // ? aquí poner imagenes de las tarjetas en la comprobación */}        
        <label htmlFor="expMonth"></label>
        <InputExpCcv className="col-4" id="expMonth" placeholder="MM" onBlur={setExpMonth} />
        <label htmlFor="expYear"></label>
        <InputExpCcv className="col-4" id="expYear" placeholder="YY" onBlur={setExpYear} />
        <label htmlFor="seguridad"></label>
        <InputExpCcv className="col-4" id="seguridad" placeholder="xxx" />
        <label htmlFor="fullName"></label>
        <InputFullName className="col-6" id="fullName" placeholder="Full Name" onBlur={setFullName} />
        <label htmlFor="typeID"></label>
        <PickerType id="typeID"className="col-6">
          {state.type.map((s, i) =>
            <option key={i} value={i}>{s}</option>
          )}
        </PickerType>
        <label htmlFor="idNumber"></label>
        <DniNumber className="col-6" id="idNumber" placeholder="Id Number" onBlur={setIdNumber} />
        <label htmlFor="email"></label>
        <Email className="col-6" id="email" placeholder="example@company.com" onBlur={setEmail} />
        <div >
        <Button type="submit">CONFIRMAR</Button>
        </div>
        
      </form>
    </div >
  )
}