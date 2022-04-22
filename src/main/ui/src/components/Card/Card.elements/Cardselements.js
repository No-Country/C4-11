import styled from "styled-components";

//Boton confirmar formulario
const Button = styled.button`
width: 150px;
margin-left: -11px;
border-radius: 5px;
border:1px solid goldenrod;
color: #c4c4c4;
font-weight: bold;
background-color: black;
&:hover{
    color: goldenrod;
}
`
//Input numero de tarjeta
const InputCardNumber = styled.input`
width: 400px;
border-radius: 5px;
border:1px solid transparent;

&:hover{
    border:2px solid goldenrod;
    outline: none;
}
`
//Input month year CCV tienen q estar en fila los 3
const InputExpCcv = styled.input`
width: 100px;
border-radius: 5px;
border:1px solid transparent;


&:hover{
    border:2px solid goldenrod;
    outline: none;
}
`
const InputFullName = styled.input`
width: 400px;
border-radius: 5px;
border:1px solid transparent;

&:hover{
    border:2px solid goldenrod;
    outline: none;
}
`
//Selector Dni tiene q estar en fila con el input Dni number
const PickerType = styled.select`
width: 100px;
border-radius: 5px;
border:1px solid transparent;
&:hover{
    border:2px solid goldenrod;
    outline: none;
}
`
const DniNumber = styled.input`
width: 300px;
border-radius: 5px;
border:1px solid transparent;
&:hover{
    border:2px solid goldenrod;
    outline: none;
}
`
const Email = styled.input`
width: 400px;
border-radius: 5px;
border:1px solid transparent;

&:hover{
    border:2px solid goldenrod;
    outline: none;
}
`
const Display = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
`
const Container = styled.div`
    display: block;
   
`
const Title = styled.h2`
    font-size: 1rem;
    color: goldenrod;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
`
export { Button, Title, Container, Display, InputCardNumber,PickerType,Email,DniNumber,InputExpCcv ,InputFullName};