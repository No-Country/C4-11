import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import './Login.css';
import styled from 'styled-components'

const Login = () => {

    const [correo, setCorreo] = useState('');
    const [password, setPasword] = useState('');
    const [mostrarCartelEmail, setMostrarCartelEmail] = useState('none');
    const [mostrarCartelPassword, setMostrarCartelPassword] = useState('none');
    


    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    //validar input correo
    const validateInput = async () => {
        if (expresiones.correo.test(correo) || correo.length===0)
         {
            setMostrarCartelEmail('none')

            


        } else {
            setMostrarCartelEmail('block')
            setCorreo('')
            
        }
    }

    //Validar input password
    const validateInputPassword = () => {
        if (expresiones.password.test(password) || correo.length===0) {
            setMostrarCartelPassword('none')
            

        } else {
            setMostrarCartelPassword('block')
            setPasword('')
        }
    }
    const Login=()=>{
        
        if(password.length>0 &&  correo.length>0){
            console.log("enviamos estos datos" + correo + password)
        }
        else{
            alert("llenar correctamente los campos")
        }

    }


    return (

        <div className='container-login'>
            <div className='container caja-login'>
                <h1 className='title-login'>Login</h1>
                <div className="input-group mb-3">
                    <span className="input-group-text  span-form" id="basic-addon1">Email</span>
                    <input
                        type="text"
                        className="form-control input-login"
                        placeholder="Escribe aqui"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        id="correo"
                        onChange={e => setCorreo(e.target.value)}
                        onBlur={validateInput}
                    />
                </div>
                <p className='cartel-error ' style={{ display: mostrarCartelEmail }}>Formato de Email Inválido</p>

                <div className="input-group mb-3">
                    <span className="input-group-text span-form" id="basic-addon1">Password</span>
                    <input

                        type="password"
                        className="form-control  input-login"
                        placeholder="Escribe aqui"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        id="password"
                        onChange={e => setPasword(e.target.value)}
                        onBlur={validateInputPassword}
                    />
                </div>
                <p className='cartel-error ' style={{ display: mostrarCartelPassword }}>Formato de Password Inválido</p>
                <button className='button-enviar' onClick={()=>Login()}>Enviar</button>
                <a href="#" className='a-login '>Es la primera vez que ingresas?</a>
                <div className='botones-login'>
                    <button className='boton-google' ><span><FcGoogle /></span>  CONTINUAR CON GOOGLE</button>
                    <button className='boton-crear'>CREAR USUARIO</button>
                </div>
            </div>


        </div>



    );
}



export default Login;