import React, { useState } from 'react';
import styled from 'styled-components';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { IconContext } from 'react-icons/lib';


const Login = () => {
    const [correo, cambiarCorreo] = useState('')
    const [password, cambiarPassword] = useState('')
    //estado primer input
    const handleInput = (e) => {
        cambiarCorreo(e.target.value)
    }
    //estado segundo input
    const handleInputDos = (e) => {
        cambiarPassword(e.target.value)
    }
    //envio de formulario
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='container lg'>
            <ContenedorTitulo>
                <Titulo>Log In</Titulo>
            </ContenedorTitulo>
            <IconContext.Provider value={{ style: { fontSize: "2em", color: 'blue' } }}>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <Input
                            type="email"
                            placeholder='correo@correo'
                            name="correo"
                            value={correo}
                            onChange={handleInput}
                        />
                        <MdEmail style={{ position: "absolute", marginLeft: "-50px", marginTop: "10px" }} />

                    </div>
                    <LeyendaError>Lorem ipsum dolor sit</LeyendaError>
                    <br />
                    <Input
                        type="password"
                        placeholder='Contraseña'
                        name="password"
                        value={password}
                        onChange={handleInputDos}
                    />
                    <RiLockPasswordFill style={{ position: "absolute", marginLeft: "-50px", marginTop: "10px" }} />
                    <LeyendaError>Lorem ipsum dolor sit</LeyendaError>
                    <ContenedorBoton>
                        <BotonIngresar type="submit">Ingresar</BotonIngresar>
                    </ContenedorBoton>
                </form>
                <ContenedorParrafo><p>es la primera vez que ingresas?</p></ContenedorParrafo>
                <ContenedorBotones>
                    <FcGoogle style={{
                        position: "absolute", fontSize: "1em", marginTop: "5px",
                        marginLeft: "4px"
                    }} />
                    <BotonGoogle><Parrafo>continuar con google</Parrafo></BotonGoogle>
                    <BotonCrearUsuario>CREAR USUARIO</BotonCrearUsuario>
                </ContenedorBotones>
            </IconContext.Provider>
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
border-radius: 3px;
margin-bottom:9px;
transition:.3s ease all;
border:3px solid transparent;
&:focus{
    border:3px solid blue;
    outline: none;
    box-shadow:3px 0px 30px rgba(163,163,163,0.4);

}
`
const LeyendaError = styled.p`
font-size:12px;
color:red;

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
margin-bottom:30px;
`
const BotonGoogle = styled.button`
background-color:#E5E5E5;
margin-right:23px;
height:25px;
width:190px;

`
const Parrafo = styled.p`
text-align:center;
padding-left:12px
`
const BotonCrearUsuario = styled.button`
background-color:#E5E5E5;
height:25px;
`




export default Login;