import "../presentation/presentation.css"

export const Presentation=()=>{
    const cervezas=[
    {
        id:"1",
        titulo:"Honey",
        rute:"https://i.postimg.cc/MTr0NszP/cerveza2.png",
        alcohol:"7%",
        description:'"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aspernatur labore ex officiis laborum quos veniam dicta quisquam, reprehenderit iste maiores totam, deleniti odit? Eaque iste hic nisi odio quasi?"'

    },
    {
        id:"2",
        titulo:"Stout",
        rute:"https://i.postimg.cc/Rhk7VN6w/cerveza1.png",
        alcohol:"6%",
        description:'"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aspernatur labore ex officiis laborum quos veniam dicta quisquam, reprehenderit iste maiores totam, deleniti odit? Eaque iste hic nisi odio quasi?"'
    },    
    {
        id:"3",
        titulo:"Amber",
        rute:"https://i.postimg.cc/XqGKbwJV/cerveza3.png",
        alcohol:"6.5%",
        description:'"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aspernatur labore ex officiis laborum quos veniam dicta quisquam, reprehenderit iste maiores totam, deleniti odit? Eaque iste hic nisi odio quasi?"'
    },
    {
        id:"4",
        titulo:"Golden",
        rute:"https://i.postimg.cc/265FHpNL/cerveza6.png",
        alcohol:"5%",
        description:'"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aspernatur labore ex officiis laborum quos veniam dicta quisquam, reprehenderit iste maiores totam, deleniti odit? Eaque iste hic nisi odio quasi?"'
    }
    
]
return(
    <div className=" presentation">
        <div>
            <h2 className="titulo-nuestras-pintas">Pintas de la casa</h2>
        </div>
        <div className="row container-cevezas">

            {cervezas.map((e)=>
                <div key={e.id} className="col-xl-3 carta-cerveza">
                    <h2 className="tittle-presentation">{e.titulo}</h2>
                    <img className="img-presentation" src={e.rute} alt="imagen cerveza" />
                    <p className="text-presentation">{e.description}</p>
                    <p className="volumen">◉ Volumen de alcohol:<span className="num-vol">{e.alcohol}</span></p>
                </div>
        
            )}
        </div>
    </div>
    )

}