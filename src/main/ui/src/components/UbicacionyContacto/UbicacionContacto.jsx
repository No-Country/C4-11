import "../UbicacionyContacto/UbicacionContacto.css"

export const UbicacionContacto=()=>{
    return(
        <div className="ubicacion-contacto-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 map-container"><div className="map-container-2"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.645534388866!2d-58.36683514913418!3d-34.61587343127877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb601a567735f%3A0x307c7f8ed4683460!2sHotel%20Madero!5e0!3m2!1ses-419!2sar!4v1648869883302!5m2!1ses-419!2sar" className="map"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                    <p className="texto-map" >Dique 2, Rosario Vera Peñaloza 360, Puerto Madero - Buenos Aires, Argentina</p></div>
                    <div className="col-lg-6">
                    <div className="row-6 " >
                        <h3 className="titulo-contacto">Datos de contacto</h3>  
                        <p className="texto-contact">Tel fijo: 3415960296</p>
                        <p className="texto-contact">WhatsApp: 3415960296</p>
                        <p className="texto-contact">Email: beertime@gmail.com</p>
                        </div>
                    <div className="row-6">
                        <h3 className="titulo-contacto">Envianos tu consulta</h3>  
                    <form class="container-inputs" action="https://formsubmit.co/santineyra97@gmail.com" method="POST"  >     
        <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Nombre y Apellido</span>
  <input type="text" name="Nombre" class="form-control" placeholder="Escribe aquí" aria-label="Username" aria-describedby="basic-addon1"></input>
</div>
<div class="input-group mb-3">
  <span class="input-group-text"  id="basic-addon1">Email</span>
  <input type="email" name="Email" class="form-control" placeholder="Escribe aquí" aria-label="Username" aria-describedby="basic-addon1"></input>
</div>
<div class="input-group">
  <span class="input-group-text" id="basic-addon1">Consulta</span>

  <textarea type="text" name="Mensaje" class="form-control" placeholder="Escribe aquí" aria-label="Username" aria-describedby="basic-addon1"></textarea>

</div>
<button type="submit" className="button-consulta">Enviar</button>
</form></div> </div>
                    <div></div>
                </div>
            </div>

        </div>

    )
}