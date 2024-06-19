import React from "react";
import { useState, useEffect } from "react";

function Reply(){

    const [reply, setReply] = useState([]);

    const {VITE_TRIAGE} = import.meta.env

    useEffect(()=>{
        let controller = new AbortController();
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            signal: controller.signal
        }

        fetch(VITE_TRIAGE, options).then(res=>res.json())
        .then(data=>setReply(data))
        .catch(err=>console.log(err))
    },[])

    return(
        <section className='seccionReply'>
         {reply.find(item => item.id === 4) && (
        <div className='seccionReply__contenedor'>
            <div className="seccionReply__contenido">
                <img src="flecha4.png" alt="Imagen Flecha 4" className='seccionReply__flecha'/>
                <h2 className='seccionReply__titulo'>Reply in context</h2>
                <p className='seccionReply__texto' key={reply[4].id}>{reply[4].text}</p>
            </div>
            <img src="reply.png" alt="Imagen Teléfono Reply" className='seccionReply__telefono' />
       </div>
        )} 
    </section>
    )
}

export default Reply;