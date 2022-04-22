import React, {useState} from 'react';
import {Stack, Container, Form, Button} from "react-bootstrap";
import firebaseApp from '../../../credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider} from "firebase/auth";
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const [estadoRegistro, setEstadoRegistro] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        const email = e.target.formBasicEmail.value;
        const password = e.target.formBasicPassword.value;

   

        if(estadoRegistro){
  
            //Para registro
            const user = await createUserWithEmailAndPassword(
                auth, 
                email, 
                password,
                    );
                
                window.location.href="/Reserva"
            }else{
                //Si se inicia sesión
               signInWithEmailAndPassword(
            auth, 
            email, 
            password,

                )     
            }  
    }

  return (
  <Container>    
    <Stack gap={3}>
        <h1>{estadoRegistro ? "Registrate" : "Inicia sesión"}</h1>
            <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su nombre" />
            </Form.Group> 

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingrese su contraseña" />
            </Form.Group>

    
            <Button variant="primary" type="submit">
                {estadoRegistro ? "Registrate" : "Inicia Sesión"}
            </Button>
        </Form>

            <Button variant="primary" type="submit" style={{width:"300px"}}onClick={()=>signInWithRedirect(auth, googleProvider)}> 
                    Acceder con Google
            </Button>

            <Button variant="secondary" onClick={()=>setEstadoRegistro(!estadoRegistro)}>
            {estadoRegistro ? "Ya tienes cuenta? Inicia sesión" : "No tienes cuenta? Registrate"}
            </Button>
    </Stack>
     </Container>
  )
}

export default Login