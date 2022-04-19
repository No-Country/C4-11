import React from "react"
import "../Footer/Footer.css"
export const Footer=()=>{
    return(
        <div className="footer">
                <div className="footer-container">
                    <div className="texto-footer ">
                        <p >Seguinos en nuestras redes!</p>
                    </div>
                    <div className="cajon-redes">
                        <a>
                            <img className="icono-redes" src="https://i.postimg.cc/xTGT0r0V/facebook-logo-png.png"></img>
                        </a>
                        <a>
                            <img className="icono-redes" src="https://i.postimg.cc/8z1kcy5J/instagram-logo-png.png"></img>
                        </a>
                        <a>
                            <img className="icono-redes" src="https://i.postimg.cc/BnMSKxLh/whatsapp-logo-png.png" ></img>
                        </a>
                    </div>
                </div>
        </div>
    )
}