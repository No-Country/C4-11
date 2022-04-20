import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-flow: column wrap;
text-align: center;
`

const ContenedorPicker = styled.div`
display: flex;

margin-bottom: 5rem;
width: 100%;
`
const ChoiceContainerUno = styled.div`

`
const ChoiceContainerDos = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



`
const ChoiceContainerTres = styled.div`

`

const SelectSession = styled.select`
width: 120.20px;
height: 30px;
background-color: black;
color: goldenrod;
border: 1px solid goldenrod;
border-radius: 3px;

`


const Calendar = styled.div`
display: flex;
flex-flow: row wrap;
width: auto;
height: auto;
justify-content:center;
margin-bottom: 3rem;


`
const ButtonCalendar = styled.button`
display: flex;
text-align: center;
width: 60px;
height: 60px;
margin:3;
padding: 10;
border-radius: 5px;
align-items: center;
font-weight: bold;  
cursor: pointer;
&:hover{
    background-color: black;
    color: goldenrod;
    transition: 1s ease all;
    transform: rotateY(360deg);
}
&:focus{
    background-color: black;
    color: goldenrod;
    border: 1px solid #C4C4C4 !important;
    

}
`
const Label = styled.label`
    color:goldenrod;
`
const TituloH3 = styled.h3`
    background-color: black;
    color: goldenrod;
`
const TituloH1 = styled.h1`
    background-color: black;
    color: goldenrod;

`
const BotonReservar = styled.button`
    background-color: black;
    color: goldenrod;
    border: 1px solid goldenrod;
    border-radius: 3px;
`



export { Container,BotonReservar, TituloH3,TituloH1,SelectSession, Calendar, ButtonCalendar, Label, ChoiceContainerUno, ChoiceContainerDos, ContenedorPicker, ChoiceContainerTres };