import React,{useState}from 'react';
import { FcGoogle } from "react-icons/fc";
import './Login.css';

const Login = () => {
    
     const [correo, setCorreo] = useState('');
      
        const expresiones = {
          usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
          nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
          password: /^.{4,12}$/, // 4 a 12 digitos.
          correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          telefono: /^\d{7,14}$/ // 7 a 14 numeros.
        }
      
      const validateInput = () => {
        if (expresiones.correo.test(correo)){
          console.log("todo OK")
        }else{
          console.log("todo mal")
        }
      }
      

    return (
        <div className='container-login'>
            <div className='container caja-login'>
                <h1 className='title-login'>Login</h1>
                <div class="input-group mb-3">
                    <span class="input-group-text  span-form" id="basic-addon1">Email</span>
                    <input type="text" class="form-control input-login" placeholder="Escribe aqui" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text span-form" id="basic-addon1">Password</span>
                    <input type="text" class="form-control  input-login" placeholder="Escribe aqui" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <button className='button-enviar'>Enviar</button>
                <a href="#"className='a-login '>Es la primera vez que ingresas?</a>
                <div className='botones-login'>                    
                    <button className='boton-google'><span><FcGoogle/></span>  CONTINUAR CON GOOGLE</button>
                    <button className='boton-crear'>CREAR USUARIO</button>
                </div>
            </div>
            

        </div>
            

    );
}

export default Login;