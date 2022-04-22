import React from "react";
import { useCard } from "./useCard";
import { textCheck } from "../../utils/regex";
import { Button, Display, Title, Container, InputCardNumber, Email, DniNumber, PickerType, InputExpCcv, InputFullName } from "./Card.elements/Cardselements";
import { useLocation, useNavigate } from "react-router-dom";

export default function Card() {
  const navigate = useNavigate();
  const { state: { reserva } } = useLocation();
  console.log(reserva)
  const { state, setCardNumber, setExpMonth, setExpYear, setFullName, setIdNumber, setEmail, validateInput, cleanErrors } = useCard();
  const validateEmail = () => {
    cleanErrors();
    validateInput(v => textCheck.email.test(v) ? "Mail incorrecto" : '')
  }
  console.log(state);
  return (
    <Container>
      <div className="container d-flex">
        <ul className='errors'>
          {state.errors.map((error, index) => (
            <li key={`e-${index}`}> {error} </li>
          ))}
        </ul>
        <form onSubmit={() => { navigate("/ReservationView", { state: { reserva } }) }} >
            <Title>
              <label htmlFor="number">NÚMERO DE TARJETA (SÓLO NÚMEROS)</label>
            </Title>
            <InputCardNumber className="col-6" id="number" placeholder="Number Card" onBlur={setCardNumber} />
            {/* // ? aquí poner imagenes de las tarjetas en la comprobación */}
            <Display>
              <Title>
                <label htmlFor="expMonth">EXPIRACIÓN</label>
                <InputExpCcv className="col-4" id="expMonth" placeholder="MM" onBlur={setExpMonth} />
              </Title>
              <label htmlFor="expYear"></label>
              <InputExpCcv className="col-4" id="expYear" placeholder="YY" onBlur={setExpYear} />

              <label htmlFor="seguridad"></label>
              <InputExpCcv className="col-4" id="seguridad" placeholder="xxx" />

            </Display>
            <Title>
              <label htmlFor="fullName">NOMBRE Y APELLIDO</label>
              <InputFullName className="col-6" id="fullName" placeholder="Full Name" onBlur={setFullName} />
            </Title>
            <Display>
              <Title>
                <label htmlFor="typeID">TIPO DE DOCUMENTO Y DNI</label>
              </Title>
              <PickerType id="typeID" className="col-6">
                {state.type.map((s, i) =>
                  <option key={i} value={i}>{s}</option>
                )}
              </PickerType>
              <label htmlFor="idNumber"></label>
            </Display>
            <DniNumber className="col-6" id="idNumber" placeholder="Id Number" onBlur={setIdNumber} />
            <label htmlFor="email"></label>
            <Email className="col-6" id="email" placeholder="example@company.com" onBlur={setEmail} />
            <div >
              <Button type="submit">CONFIRMAR</Button>
            </div>

          </form>
      </div >
    </Container>
  )
}