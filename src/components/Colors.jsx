import React from "react";
import { useState, useEffect } from "react";

function Colors(){

    const [color, setColors] = useState([]);

    const {VITE_TRIAGE} = import.meta.env

    useEffect(()=>{
        let controller = new AbortController();
        let options= {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
            },
            signal: controller.signal
        }

        fetch(VITE_TRIAGE, options).then(res=>res.json())
        .then(data=>setColors(data.slice(5)))
        .catch(err=>console.log(err))
    },[])
    return(
        <section className='seccionColors'>
        <div className='seccionColors__contenedor'>
          {color.map(color => (
            <div key={color.id} className='seccionColors__card' style={{ backgroundColor: color.color }}>
              <img src={color.img} alt={`Card ${color.id}`} className='seccionColors__image' />
              <p className="seccionColors__texto">{color.text}</p>
            </div>
          ))}
        </div>
      </section>
    )
}

export default Colors;