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
    const addNombreYApellido=(e)=>{
        setNombreYApellido(e.target.value)
        console.log(NombreYApellido)
    }
    const addEmail=(e)=>{
        let contador=0
        let valor=e.target.value
        for(let x=0; x < (valor.length); x++){
            if((valor)[x]==="@")
                {
                    contador++;
                }
        }
        if(contador===1){
        setMostrarEmail("none")
        setEmailContacto(e.target.value)
        console.log(EmailContacto)
        }
        else(setMostrarEmail("block"))
    }
    const AddConsulta=(e)=>{
        if((e.target.value).length<15){
            setMostrarConsulta("block")
            
            
        }
        else{
            setMostrarConsulta("none")
            setConsulta(e.target.value)}
            console.log(Consulta)
        }

    
    const EnviarConsulta=(event)=>{
        
        setEmailCompleto(
            {
                Nombre:{NombreYApellido},
                email:{EmailContacto},
                Consulta:{Consulta}
            }

        )
         console.log(EmailCompleto)   
    }

    return(
        <div className="ubicacion-contacto-container" id="Map">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 map-container"><div className="map-container-2"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.645534388866!2d-58.36683514913418!3d-34.61587343127877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb601a567735f%3A0x307c7f8ed4683460!2sHotel%20Madero!5e0!3m2!1ses-419!2sar!4v1648869883302!5m2!1ses-419!2sar" className="map"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
                    <p className="texto-map" >Dique 2, Rosario Vera Peñaloza 360, Puerto Madero - Buenos Aires, Argentina</p></div>
                    <div className="col-lg-6">
                    <div className="row-6 " >
                        <h3 className="titulo-contacto">Datos de contacto</h3>  
                        <p className="texto-contact">Tel fijo: 3415960296</p>
                        <p className="texto-contact">WhatsApp: 3415960296</p>
                        <p className="texto-contact">Email: beertime@gmail.com</p>
                        </div>
                    <div className="row-6 container-consulta">
                        <h3 className="titulo-contacto">Envianos tu consulta</h3>  
                    <form  className="container-inputs" >     
        <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Nombre y Apellido</span>
  <input onBlur={(e)=>addNombreYApellido(e)} type="text" name="Nombre" className="form-control" placeholder="Escribe aquí" aria-describedby="basic-addon1"></input>
</div>
<div className="input-group mb-3">
  <span className="input-group-text"  id="basic-addon1">Email</span>
  <input onBlur={(e)=>addEmail(e)} className="form-control" placeholder="Escribe aquí" aria-label="Username" aria-describedby="basic-addon1"></input>
</div>
<div><p className="invalid" style={{color:"red", display:MostrarEmail}}>Email Inválido.</p></div>
<div className="input-group">
  <span className="input-group-text" id="basic-addon1">Consulta</span>

  <textarea onBlur={(e)=>AddConsulta(e)} type="text" name="Mensaje" className="form-control" placeholder="Escribe aquí"  aria-describedby="basic-addon1"></textarea>

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