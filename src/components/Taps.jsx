import React from "react";
import { useState, useEffect } from "react";

function Taps(){

    const [ Tap, setTaps] = useState([]);

    const {VITE_TRIAGE} = import.meta.env

    useEffect(()=>{
        let controller = new AbortController();
        let options = {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
            },
            signal: controller.signal,
        }

        fetch(VITE_TRIAGE,options).then(res=>res.json())
        .then(data=>setTaps(data))
        .catch(err=>console.log(err))
    },[])
    return(
        <section className='seccionTap'>
            {Tap.find(item => item.id === 4) && (
            <div className='seccionTap__contenedor'>
                <img src="expand.png" alt="Imagen Teléfono Expand" className='seccionTap__telefono'/>
                <div className="seccionTap__contenido">
                    <img src="flecha3.png" alt="Imagen Flecha 3" className='seccionTap__felcha' />
                    <h2 className='seccionTap__titulo'>Tap to expand</h2>
                    <p className='seccionTap__texto' key={Tap[3].id}>{Tap[3].text}</p>
                </div>
            </div>
            )}
    </section>
    )
}
export default Taps;