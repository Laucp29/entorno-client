import React from "react";
import { useState, useEffect } from "react";

function Triage(){
    const [triage,setTriage] = useState([]);

    const {VITE_TRIAGE} = import.meta.env

    useEffect(()=>{
        let controller = new AbortController();
        let options ={
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            signal: controller.signal
        }

        fetch(VITE_TRIAGE,options).then(res=>res.json())
        .then(data=>setTriage(data))
        .catch(err=>console.log(err))
    
        
    }, [])

    return(
        <section className='seccionTriage'> 
        {triage.find(item => item.id === 1) && (
          <div className='seccionTriage__contenedor'>
            <div className="seccionTriage__contenido">
              <img src="triage2.png" alt="Imagen Triage" className='imagenTriage' />
              <h2 className='seccionTriage__titulo'>Triage is first aid for your inbox</h2>
              <p key={triage[0].id} className="seccionTriage__texto">{triage[0].text}</p>
              <img src="descarga.png" alt="Boton Descarga" className='descargar'/>
            </div>
              <img src="triage.png" alt="Imagen Triage Teléfono" className='imagenTelefono' />
          </div>
        )}
      </section>
    );
}

export default Triage;