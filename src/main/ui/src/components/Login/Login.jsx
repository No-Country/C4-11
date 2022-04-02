import React, { useState } from 'react';
import styled from 'styled-components';

const Login = () => {

    const [correo, cambiarCorreo] = useState('')
    return (
        <div className='container lg'>

            <ContenedorTitulo>
                <Titulo>Log In</Titulo>
            </ContenedorTitulo>
            <form action="">
                <Input type="text" placeholder='Correo Electrónico' /><br />
                <InputDos type="text" placeholder='Contraseña' />
                <ContenedorBoton>
                    <BotonIngresar>Ingresar</BotonIngresar>
                </ContenedorBoton>
            </form>
            <ContenedorParrafo><p>es la primera vez que ingresas?</p></ContenedorParrafo>
            <div>
                <BotonGoogle>CONTINUAR CON GOOGLE</BotonGoogle>
                <BotonCrearUsuario>CREAR USUARIO</BotonCrearUsuario>

            </div>




        </div>
    );
}
const ContenedorTitulo = styled.div`
margin-bottom:99px`
const Titulo = styled.h1`
font-family: 'Roboto', sans-serif;
`
const Input = styled.input`
background: #E5E5E5;
height: 56px;
width: 328px;
left: 0px;
top: 0px;
border-radius: 4px;
margin-bottom:9px;
`
const InputDos = styled.input`
background: #E5E5E5;
height: 56px;
width: 328px;
left: 0px;
top: 0px;
border-radius: 4px;
margin-bottom:9px;
margin-bottom:27px;
`
const ContenedorBoton = styled.div`
margin-bottom:83px;`

const BotonIngresar = styled.button`
height: 37px;
width: 184px;
left: 99px;
top: 419px;
border-radius: 4px;
padding: 10px, 54px, 10px, 54px;
background-color:rgba(167, 165, 169, 1);
`
const ContenedorParrafo = styled.div`
margin-bottom:70px;
`
const ContenedorBotones = styled.div`

`
const BotonGoogle = styled.button`
background-color:#E5E5E5;
margin-right:23px;
height:25px;
`
const BotonCrearUsuario = styled.button`
background-color:#E5E5E5;
height:25px;
`




export default Login;