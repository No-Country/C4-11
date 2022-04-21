import React from 'react'
import { Formulario,  Button} from './helper/Form';

const LogOut = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        window.location.href="./login"
  
      }
  return (
    <>
    <Formulario onSubmit={handleSubmit}>
             <Button type='submit'>Log out</Button> 
    </Formulario>
           
    </>
  )
}

export default LogOut