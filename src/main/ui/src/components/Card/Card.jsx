import React from "react";
import { useCard } from "./useCard";
import { textCheck } from "../../utils/regex";
import Master from "../Card/img/master.png"
import Visa from "../Card/img/visa.png"
import { Button, Images, Label, Display, DisplayButton, Title, Container, InputCardNumber,Email, Form, DniNumber,PickerType,InputExpCcv, InputFullName } from "./Card.elements/Cardselements";

export default function Card() {
  const { state, setCardNumber, setExpMonth, setExpYear, setFullName, setIdNumber, setEmail, validateInput, cleanErrors } = useCard();
  const validateEmail = () => {
    cleanErrors();
    validateInput(v => textCheck.email.test(v) ? "Mail incorrecto": '')
  }
  console.log(state);
  return (
    <Container>
      <ul className='errors'>
        {state.errors.map((error, index) => (
          <li key={`e-${index}`}> {error} </li>
        ))}
      </ul>
      <Form>
      <form  className="row "onSubmit={()=>console.log("Aqui muestro la reserva completa")}>
        <Title>
        <Label htmlFor="number">NÚMERO DE TARJETA (SÓLO NÚMEROS)</Label>
       </Title>
          <InputCardNumber id="number" placeholder="Número de Tarjeta" onBlur={setCardNumber} />
          <Images>
            <img src={Master} alt="" />
            <img src={Visa} alt="" />
          </Images>
          {/* // ? aquí poner imagenes de las tarjetas en la comprobación */}     
         <Display>   
           <Title>
          <Label htmlFor="expMonth" style={{marginLeft:"-10px"}}>EXPIRACIÓN</Label>
          <InputExpCcv  id="expMonth" placeholder="MM" onBlur={setExpMonth} />
         </Title> 
           <Title>
          <Label htmlFor="expYear"></Label>
          <InputExpCcv  id="expYear" placeholder="YY" onBlur={setExpYear} />
          </Title>
           <Title>
          <Label htmlFor="seguridad">CVV</Label>    
          <InputExpCcv style={{marginLeft:"10px"}} id="seguridad" placeholder="xxx" />
          </Title>
        </Display>
        <Title>
           <Label htmlFor="fullName" style={{marginLeft:"10px"}}>NOMBRE Y APELLIDO</Label>
          <InputFullName  id="fullName" placeholder="Nombre y Apellido" onBlur={setFullName} />
        </Title>  
      
          <Title>
          <Label htmlFor="typeID">TIPO DE DOCUMENTO Y DNI</Label>
          </Title>
          <Display>
        <PickerType id="typeID">
          {state.type.map((s, i) =>
            <option key={i} value={i}>{s}</option>
          )}
        </PickerType>
        <Label htmlFor="idNumber"></Label>
    
        <DniNumber className="col-6" id="idNumber" placeholder="Número de Documento" onBlur={setIdNumber} />
        </Display>
        <Title>
        <Label htmlFor="email">MAIL</Label>
        </Title>
        <Email className="col-6" id="email" placeholder="example@company.com" onBlur={setEmail} />
        <div >
        <DisplayButton>
          <div className="button" style={{marginRight:"70px"}}>
            <Button type="submit">CANCELAR</Button>
          </div>
          <div className="button">
            <Button type="submit">CONFIRMAR</Button>
          </div>  
        </DisplayButton>  
        </div>
        
      </form>
    </Form>
    </Container>
  )
}