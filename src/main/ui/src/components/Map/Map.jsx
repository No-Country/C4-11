import { useState } from "react"
import "../Map/Map.css"
import React from "react"


export const Map=()=>{
    const [NombreYApellido, setNombreYApellido]=useState("")
    const [EmailContacto, setEmailContacto]=useState()
    const [Consulta, setConsulta]=useState("")
    const [MostrarEmail, setMostrarEmail]=useState("none")
    const [MostrarConsulta, setMostrarConsulta]=useState("none")
    const [EmailCompleto, setEmailCompleto]=useState([])
    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }
    
    const validateInput = () => {
        
        if (expresiones.correo.test(EmailContacto) || EmailContacto.length === 0) {
            setMostrarEmail('none')
        } else {
            setMostrarEmail('block')
             setEmailContacto('')
        }
    }
    
    const addNombreYApellido=(e)=>{
        setNombreYApellido(e.target.value)
        console.log(NombreYApellido)
    }
    const ValidateConsulta=(e)=>{
        if((Consulta).length<15 && (Consulta).length>0){
            setMostrarConsulta("block")
            setConsulta('')
            
        }
        else{
            setMostrarConsulta("none")
            setConsulta(e.target.value)}
            console.log(Consulta)
        }

    
    const EnviarConsulta=(event)=>{
        if(EmailContacto.length>0 && NombreYApellido.length>0 && Consulta.length>0){
            setEmailCompleto(
                {
                    Nombre:{NombreYApellido},
                    email:{EmailContacto},
                    Consulta:{Consulta}
                }
                
            )
            console.log(EmailCompleto)
        }
         else{
            alert("Rellenar bien los campos")
         } 
    }

    return(
        <div className="ubicacion-contacto-container" id="Map">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 map-container"><div className="map-container-2"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.645534388866!2d-58.36683514913418!3d-34.61587343127877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb601a567735f%3A0x307c7f8ed4683460!2sHotel%20Madero!5e0!3m2!1ses-419!2sar!4v1648869883302!5m2!1ses-419!2sar" className="map"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
                    <p className="texto-map" >Dique 2, Rosario Vera Peñaloza 360, Puerto Madero - Buenos Aires, Argentina</p></div>
                    <div className="col-lg-6">
                    <div className="row-6 parte-derecha" >
                        <h3 className="titulo-contacto">Datos de contacto</h3>  
                        <p className="texto-contact">Tel fijo: 3415960296</p>
                        <p className="texto-contact">WhatsApp: 3415960296</p>
                        <p className="texto-contact">Email: beertime@gmail.com</p>
                        </div>
                    <div className="row-6 parte-derecha">
                        <h3 className="titulo-contacto">Envianos tu consulta</h3>  
                    <form  className="container-inputs" >     
        <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Nombre y Apellido</span>
  <input onChange={(e)=>addNombreYApellido(e)} type="text" name="Nombre" className="form-control" placeholder="Escribe aquí" aria-describedby="basic-addon1"></input>
</div>
<div className="input-group mb-3">
  <span className="input-group-text"  id="basic-addon1">Email</span>
  <input onChange={e => setEmailContacto(e.target.value)} onBlur={validateInput} className="form-control" placeholder="Escribe aquí" aria-label="Username" aria-describedby="basic-addon1"></input>
</div>
<div><p className="invalid" style={{color:"red", display:MostrarEmail}}>Email Inválido.</p></div>
<div className="input-group">
  <span className="input-group-text" id="basic-addon1">Consulta</span>

  <textarea onChange={e=>setConsulta(e.target.value)} onBlur={(e)=>ValidateConsulta(e)} type="text" name="Mensaje" className="form-control" placeholder="Escribe aquí"  aria-describedby="basic-addon1"></textarea>

</div>
<div><p className="invalid-cons" style={{color:"red", display:MostrarConsulta}}>El texto debe contener al menos 15 caracteres.</p></div>


</form>
<button onClick={()=>EnviarConsulta()}   className="button-consulta">Enviar</button></div> </div>
                    <div></div>
                </div>
            </div>

        </div>

    )
}