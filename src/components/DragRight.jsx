import React from "react";
import { useState, useEffect } from "react";
function DragRight(){

    const [dragRight,setDragRight] = useState([]);

    const {VITE_TRIAGE} = import.meta.env

    useEffect(()=>{
        let controller = new AbortController();
        let options = {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            },
            signal: controller.signal,
        };

        fetch(VITE_TRIAGE,options).then(res=>res.json())
        .then(data=>setDragRight(data))
        .catch(err=>console.log(err))
    },[])

    return(
        <section className='seccionDragRight'>
      
        {dragRight.find(item => item.id === 3) && (
        <div className='seccionDragRight__contenedor'>
            <div className='seccionDragRight__contenido'>
                <img src="flecha2.png" alt="Imagen Flecha 2" className='seccionDragRight__flecha'/>
                <h2 className='seccionDragRight__titulo'>Drag right to keep</h2>
                <p className='seccionDragRight__texto' key={dragRight[2].id}>{dragRight[3].text}</p>
            </div>
            <img src="keep.png" alt="Imagen Teléfono Keep" className='seccionDragRight__telefono' />
        </div>
      )}
    </section>
    )
}
export default DragRight;