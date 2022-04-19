import React from "react"
import "../Footer/Footer.css"
export const Footer=()=>{
    return(
        <div className="footer">
            <div className="container d-flex contenedor-footer"> 
            <div className="footer-container">
                <p className="texto-footer col-md-8">Seguinos en nuestras redes!</p>
            <div className="cajon-redes col-md-5">
            <a>
            <img className="icono-redes" src="https://i.postimg.cc/xTGT0r0V/facebook-logo-png.png"></img></a>
            <a>
            <img className="icono-redes" src="https://i.postimg.cc/8z1kcy5J/instagram-logo-png.png"></img></a>
            <a>
            <img className="icono-redes" src="https://i.postimg.cc/BnMSKxLh/whatsapp-logo-png.png" ></img></a>
            </div>
            </div>
            </div>


        </div>

    )
}