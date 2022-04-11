import React, {useState} from 'react';
import "./styleLogin.css";
import { Formulario, Label, Terminos, ButtonCentered, Button, Success, ErrorDiv } from './helper/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import InputUser from '../../components/Login/componentLogin/InputUser';


const Login = () => {
    const [usuario, cambiarUsuario] = useState({campo: "", valido: null});

    const [nombre, cambiarNombre] = useState({campo: "", valido: null});

    const [password, cambiarPassword] = useState({campo: "", valido: null});

    const [password2, cambiarPassword2] = useState({campo: "", valido: null});

    const [correo, cambiarCorreo] = useState({campo: "", valido: null});

    const [telefono, cambiarTelefono] = useState({campo: "", valido: null});

    const [terminos, cambiarTerminos] = useState(false);

    const [formularioValido, cambiarFormulario] = useState(null);

    const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guionbajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{8,16}$/, // 8 a 16 digitos.
        correo: /^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    const validarPassword = () =>{
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

    const onChangeTerminos = (e) => {
        cambiarTerminos(e.target.checked);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if(
            usuario.valido === 'true' && 
            nombre.valido === 'true' && 
            password.valido === 'true' && 
            password2.valido === 'true' && 
            telefono.valido === 'true' && 
            correo.valido === 'true' && 
            terminos)
            {
            cambiarFormulario(true)
            cambiarUsuario({cambio: '', valido: ''});
            cambiarNombre({cambio: '', valido: null});
            cambiarCorreo({cambio: '', valido: 'null'});
            cambiarTelefono({cambio: '', valido: null});
            cambiarPassword({cambio: '', valido: null});
            cambiarPassword2({cambio: '', valido: null});
            window.location.href="./Menu"
            //
        }
        else{
            cambiarFormulario(false)
        }
    };
  return (
    <main>
        <Formulario action='' onSubmit={onSubmit}>
          
            <InputUser
                estado={nombre}
                cambiarEstado={cambiarNombre}
                type="text"
                label="Nombre"
                placeholder="Ingrese su nombre"
                name="nombre"
                error="Carácteres inválidos"
                expresionRegular={expresiones.nombre}
            />          

            <InputUser
                estado={usuario}
                cambiarEstado={cambiarUsuario}
                type="text"
                label="Usuario"
                placeholder="Usuario"
                name="usuario"
                error="Letras y espacios, pueden llevar acentos."
                expresionRegular={expresiones.usuario}
            />

            <InputUser
                estado={correo}
                cambiarEstado={cambiarCorreo}
                type="email"
                label="Email"
                placeholder="Ingrese su correo electrónico"
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

            <InputUser
                estado={telefono}
                cambiarEstado={cambiarTelefono}
                type="text"
                label="telefono"
                placeholder="Ingrese su número de teléfono"
                name="telefono"
                error="Número entre 7 a 14 dígitos"
                expresionRegular={expresiones.telefono}
                
            />

            <Terminos>
                <Label>
                   <input 
                   type="checkbox" name="terminos" id="terminos"
                   checked={terminos}
                   onChange={onChangeTerminos}/>Acepto los Términos y condiciones
                </Label>
            </Terminos>

            {formularioValido === false && <ErrorDiv>
                <p>
                    <FontAwesomeIcon icon={faExclamationTriangle}/>
                <b>Error: </b> Complete el formulario correctamente.
                </p>
            </ErrorDiv>}
            <ButtonCentered>
                <Button type='submit'>Registrarme</Button>
                {formularioValido === true && <Success>Formulario enviado exitosamente</Success>}
            </ButtonCentered>
        
        </Formulario>
    </main>
  )
}

export default Login