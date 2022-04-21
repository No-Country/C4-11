import React, {useState} from "react";
import firebaseApp from "../../credenciales";
import {getAuth, onAuthStateChanged} from "firebase/auth";
const auth = getAuth(firebaseApp);

function EstadoLog() {
    const [userGlobal, setUserGlobal] = useState(null);
  
   onAuthStateChanged(auth, (userFirebase)=>{
     if(userFirebase){
          setUserGlobal(userFirebase);
     }else{
       //Si no hay sesión iniciada
        setUserGlobal(null);
     }
   })
  
    return (
  
        <>
     
        {userGlobal ? <Home/> : <Login/>}
    
      </>
    )  
  }
  
  export default EstadoLog