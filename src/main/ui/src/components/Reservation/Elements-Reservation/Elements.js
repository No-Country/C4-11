import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-flow: column wrap;
text-align: center;
`
const ContenedorPicker = styled.div`
display: flex;
justify-content: space-around;
margin-bottom: 5rem;

    @media(max-width: 750px){
        display: inline-block;
        margin: auto;
        
    }
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
const ButtonConfirm = styled.button`
display: flex;
text-align: center;
width: 100px;
height: 80px;
margin:3;
padding: 10;
border-radius: 5px;
align-items: center;
font-weight: bold;
padding:12px;



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
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
`
const TituloH3 = styled.h3`
    background-color: black;
    color: goldenrod;
    margin-bottom: 3rem;
`
const TituloH1 = styled.h1`
    background-color: black;
    color: goldenrod;
    margin-bottom: 3rem;
`
const BotonReservar = styled.button`
    width: 100px;
    font-weight: bold;
    background-color: white;
    color: black;    
    border-radius: 5px;
    &:hover{
        color:goldenrod;
        background-color: black;
        border:1px solid goldenrod;                
    }
`
const ContenedorImagen = styled.div`
display:flex;
justify-content: center;
margin: auto;
margin-bottom: 50px;
`
const Imagen = styled.img`
border:2px solid goldenrod;
width: 50%;
    @media(max-width: 1100px){
        width: 75%;
    }

`
const BotonesConfirm = styled.button`
    font-weight: bold;
    background-color: black;
    color: goldenrod;
    border-radius: 5px;    
    width: 130px;
    margin-bottom:1rem;
    margin-left: 1rem;
    

`
const DivBotones = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    
`

const ContenedorBotonReserva = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-bottom: 4rem;
`
const BotonMesas = styled.button`
    font-weight: bold;
    background-color: white;
    color: black;
    border-radius: 5px;
    margin:2px;    
    &:hover{
        color:goldenrod;
        background-color: black;
        border:1px solid goldenrod;
    }
    &:focus{
    background-color: black;
    color: goldenrod;
    border: 1px solid #C4C4C4 !important;   
}    
`
const Parrafo = styled.p`
    color:goldenrod;
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 1.5rem;

`
const Bottom = styled.div`
    height: 100vh;
`

export { Container,Bottom, Parrafo,BotonesConfirm, DivBotones,ButtonConfirm, BotonMesas, ContenedorBotonReserva, ContenedorImagen, Imagen, BotonReservar, TituloH3, TituloH1, SelectSession, Calendar, ButtonCalendar, Label, ChoiceContainerUno, ChoiceContainerDos, ContenedorPicker, ChoiceContainerTres };
