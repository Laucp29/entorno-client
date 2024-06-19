import React from "react";
import { useState, useEffect } from "react";

function DragLeft (){
    const [dragLeft, setDragLeft] = useState([]);

    const {VITE_TRIAGE} = import.meta.env

    useEffect(()=>{

        let controller = new AbortController();
        let options = {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            },
            signal : controller.signal
        };

        fetch(VITE_TRIAGE,options).then(res=>res.json())
        .then(data=>setDragLeft(data))
        .catch(err=>console.log(err))

    },[])
    return(
        <section className='seccionDragLeft'>
        {dragLeft.find(item => item.id === 2) && (
        <div className='seccionDragLeft__contenedor'>
            <img src="archive.png" alt="Imagen Teléfono Archivo" className='seccionDragLeft__telefono' />
            <div className="seccionDragLeft__contenido">
                <img src="flecha.png" alt="Imagen Flecha" className='seccionDragLeft__flecha'/>
                <h2 className='seccionDragLeft__titulo'>Drag left to archive</h2>
                <p className='seccionDragLeft__texto' key={dragLeft[1].id}>{dragLeft[1].text}</p>
            </div>
        </div>
        )}
        </section>
    )
}
export default DragLeft;