import styled from "styled-components";

//Boton confirmar formulario
const Button = styled.button`
width: 150px;
margin-left: 10px;
border-radius: 5px;
border:1px solid goldenrod;
color: goldenrod;
font-size: 1.2rem;
background-color: black;
&:hover{
    font-weight: bold;
}
@media(max-width:650px){
    width: 100px;
    font-size: 1rem;
}
`
//Input numero de tarjeta
const InputCardNumber = styled.input`
width: 402px;
height: 30px;
margin-left: 30px;
border-radius: 5px;
border:1px solid transparent;
outline: none;
font-size: 1.1rem;
&:hover{
    border: 1px solid goldenrod;
}
@media(max-width: 650px){
    width: 300px;
}
@media(max-width: 420px){
    width: 290px;
}
`
//Input month year CCV tienen q estar en fila los 3
const InputExpCcv = styled.input`
width: 100px;
height: 30px;
border-radius: 5px;
border:1px solid transparent;
outline: none;
&:hover{
    border: 1px solid goldenrod;
}
@media(max-width:650px){
    width: 90px;
}

`
const InputFullName = styled.input`
width: 400px;
height: 30px;
margin-left: 20px;
border-radius: 5px;
border:1px solid transparent;
outline: none;
&:hover{
    border: 1px solid goldenrod;
}
@media(max-width: 650px){
    width: 300px;
}
@media(max-width: 420px){
    width: 290px;
}
`
//Selector Dni tiene q estar en fila con el input Dni number
const PickerType = styled.select`
width: 90px;
height: 30px;
font-size: 1.1rem;
border-radius: 5px;
border:1px solid transparent;
outline: none;
&:hover{
    border: 1px solid goldenrod;
}
`
const DniNumber = styled.input`
width: 280px;
height: 30px;
font-size: 1.1rem;
border-radius: 5px;
border:1px solid transparent;
outline: none;

&:hover{
    border: 1px solid goldenrod;
}
@media(max-width: 650px){
    width: 185px;
}
@media(max-width: 420px){
    width: 175px;
}
`
const Email = styled.input`
width: 400px;
border-radius: 5px;
border:1px solid transparent;
outline: none;
font-size: 1.1rem;
margin-left: 32px;
&:hover{
    border: 1px solid goldenrod;
    outline: none;
}
@media(max-width: 650px){
    width: 310px;
}
@media(max-width: 420px){
    width: 300px;
}
`
const Display = styled.div`
    display: flex;
    margin-left: 20px;
    
`
const Container = styled.div`
margin-top: 50px;
  width: 100%;
  height: 100vh;
`
const Form = styled.div`
    display: flex;
    width: 450px;
    margin: 0 auto 20px;

    @media(max-width: 650px){
        width: 350px;
    }
    @media(max-width: 420px){
        width: 320px;
}

`
const Title = styled.h2`
    font-size: 1rem;
    color: goldenrod;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
`
const DisplayButton = styled.div`
    display: flex;
    margin: 0 0 20px 20px;
`
const Label = styled.label`
   margin-left: 10px;
   font-weight: 100;
   @media(max-width:430px){
        font-size: 0.9rem;
    }
`
const Images = styled.div`
    margin-left: 20px;
`
export {DisplayButton, Images, Label, Form, Button, Title, Container, Display, InputCardNumber,PickerType,Email,DniNumber,InputExpCcv ,InputFullName};