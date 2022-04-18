import React, {useState} from 'react';
import "./styleLogin.css";
import { Formulario, ButtonCentered, Button, ErrorDiv } from './helper/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import InputUser from '../../components/Login/componentLogin/InputUser';

const Login = () => {

    const [password, cambiarPassword] = useState({campo: "", valido: null});

    const [password2, cambiarPassword2] = useState({campo: "", valido: null});

    const [correo, cambiarCorreo] = useState({campo: "", valido: null});

    const [formularioValido, cambiarFormulario] = useState(null);

    const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guionbajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{5,16}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{8,16}$/, // 8 a 16 digitos.
        correo: /^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    const validarPassword = () => {
        if(password.campo.length > 0){
            if(password.campo !== password2.campo){
                cambiarPassword2((prevState) => {
                    return{...prevState, valido: 'false'}
                })
            }else{
                cambiarPassword2((prevState) => {
                    return {...prevState, valido: 'true'}
                });
            }
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(
            password.valido === 'true' && 
            password2.valido === 'true' && 
            correo.valido === 'true' && 
            {/**/})
            {
            cambiarFormulario(true)
            cambiarCorreo({cambio: '', valido: 'null'});
            cambiarPassword({cambio: '', valido: null});
            cambiarPassword2({cambio: '', valido: null});
            window.location.href="./Reservas"
            //
        }
        else{
            cambiarFormulario(false)
        }
    };
  return (
    <main> 
        <h1>{formularioValido ? "LOG IN" : "SIGN UP"}</h1>
        <Formulario action='' onSubmit={onSubmit}>
         
    
               
            <InputUser
                label="Email"
                placeholder="Ingrese su correo electrónico"
         
                estado={correo}
                cambiarEstado={cambiarCorreo}
                type="email"
               
                name="email"
                error="Carácteres inválidos"
                expresionRegular={expresiones.correo}
            />
            
            <InputUser
                estado={password}
                cambiarEstado={cambiarPassword}
                type="password"
                label="Contraseña"
                placeholder="Ingrese su correo contraseña"
                name="password"
                error="La contraseña debe contener de 8 a 16 digitos."
                expresionRegular={expresiones.password}
            />

            <InputUser
                estado={password2}
                cambiarEstado={cambiarPassword2}
                type="password"
                label="Repita su contraseña"
                placeholder="Repita su contraseña"
                name="password2"
                error="Las contraseñas no coinciden"
                funcion={validarPassword}
            />

            <ButtonCentered>
                <Button type='submit'> {formularioValido ? "ENVIAR" : "CREAR USUARIO"}</Button>
                <br></br>
            </ButtonCentered>
        </Formulario>
        <Button variant="secondary" onClick={()=>cambiarFormulario(!formularioValido)}>
            {formularioValido ? "REGISTRATE"  : "LOG IN"}
            </Button>
            {formularioValido === false && <ErrorDiv>
                <p>
                    <FontAwesomeIcon icon={faExclamationTriangle}/>
                <b>Error: </b> Complete el formulario correctamente.
                </p>
            </ErrorDiv>}
    </main>
  )
}

export default Login

