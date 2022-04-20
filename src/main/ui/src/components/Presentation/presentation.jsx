import "../Presentation/Presentation.css"
import React from "react"
export const Presentation=()=>{
    const cervezas=[
    {
        id:"1",
        titulo:"Honey",
        rute:"https://i.postimg.cc/MTr0NszP/cerveza2.png",
        alcohol:"7%",
        description:'Las cervezas Honey se elaboran con miel, la que les aporta a un sabor dulce y azúcares fermentables que elevan el contenido alcohólico de la cerveza. Las cervezas con miel son algo turbias y especiadas. Además tiene un final seco. También se les puede añadir piel de naranja, clavo y cilantro que las convierten en una bebida de sabor especiado.'

    },
    {
        id:"2",
        titulo:"Stout",
        rute:"https://i.postimg.cc/Rhk7VN6w/cerveza1.png",
        alcohol:"6%",
        description:'Una Stout es un estilo de cerveza muy oscura de alta fermentación (ALE) originario del antiguo Londres. Son cervezas amargas (aunque no demasiado, ya que oscilan entre 30 y 45 IBUs) y generalmente llevan toques a café y chocolate.'
    },    
    {
        id:"3",
        titulo:"Amber Ale",
        rute:"https://i.postimg.cc/XqGKbwJV/cerveza3.png",
        alcohol:"6.5%",
        description:'La cerveza Amber Ale es un estilo de cerveza americano con un carácter malteado y tique de caramelo. Es una cerveza híbrida que se fermenta con levadura de Lager pero a temperaturas altas. Esta cerveza es bastante amarga pero tiene un final puro. Se caracteriza por un color cobre rojizo.'
    },
    {
        id:"4",
        titulo:"Golden",
        rute:"https://i.postimg.cc/265FHpNL/cerveza6.png",
        alcohol:"5%",
        description:'Las cervezas Golden Ale se elaboran de la misma forma que las Ales. Usando levaduras de fermentación alta a una temperatura de 24 ºC, pero para obtener un color limpio y claro, se maduran en el fermentador a 12 ºC durante 7 semanas antes de trasbordarlas a la botella o barril.'
    }
    
]
return(
    <div className="container-presentation">
    <div className="container-titulo d-flex justify-content-center">
            <h2 className="titulo-nuestras-pintas">Pintas de la casa</h2>
        </div>
    <div className=" presentation">
        
        <div className="row container-cervezas">

            {cervezas.map((e)=>
                <div key={e.id} className="col-xl-3 carta-cerveza">
                    <div className="card-front"> 
                        <h2 className="tittle-presentation">{e.titulo}</h2>
                        <img className="img-presentation" src={e.rute} alt="imagen cerveza" />
                    </div>
                        <div className="card-back">
                        <h2 className="tittle-presentation">{e.titulo}</h2>
                        <p className="text-presentation">{e.description}</p>
                        <p className="volumen">◉ Volumen de alcohol:<span className="num-vol">{e.alcohol}</span></p>
                    </div>
                </div>
        
            )}
        </div>
    </div>
    </div>
    )

}