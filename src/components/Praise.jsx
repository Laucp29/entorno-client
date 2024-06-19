import React from "react";
import { useState, useEffect } from "react";

function Praise (){
    const [praise, setPraise] = useState([]);

    const {VITE_PRAISE} = import.meta.env

    useEffect(()=>{

        let controller = new AbortController();
        let options = {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            },
            signal : controller.signal
        };

        fetch(VITE_PRAISE,options).then(res=>res.json())
        .then(data=>setPraise(data))
        .catch(err=>console.log(err))

    },[])
    return(
        <section className="seccionPraise">
        <h2 className='seccionPraise__titulo'>Praise for Triage 1</h2>
        <div className="seccionPraise__contenedor">
            {praise.map((praise) => ( 
                <div key={praise.id} className="praise">
                    <p className="seccionPraise__texto">{praise.text}</p>
                    <img src={praise.img} alt={`Imagen Praise ${praise.id}`} className="seccionPraise_img"  />
                </div>
            ))}
        </div>
    </section>
    )
}
export default Praise;