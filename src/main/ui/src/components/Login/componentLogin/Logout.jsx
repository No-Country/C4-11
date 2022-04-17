import React from 'react';

import firebaseApp from '../../../credenciales';
import {getAuth, signOut} from "firebase/auth";
import {Container, Button} from "react-bootstrap";
const auth = getAuth(firebaseApp);
const Home = () => {
  return (
    <div>
      <Container>
          <h2>Sesión Iniciada</h2>
          <Button onClick={()=>signOut(auth)}>
              Cerrar sesión
          </Button>

      </Container>
    </div>
  )
}

export default Home