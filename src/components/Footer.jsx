import React from "react";
import { useState, useEffect } from "react";

function Footer(){
    const [footer, setFooter] = useState([]);

    const {VITE__FOOTER} = import.meta.env

    useEffect(()=>{
        let controller = new AbortController();
        let options = {
            method: 'GET',
            headers:  {
                'Content-Type':'applicaiton/json'
            },
            signal: controller.signal
        }

        fetch(VITE__FOOTER, options).then(res=>res.json())
        .then(data=>setFooter(data))
        .catch(err=>console.log(err))
    },[])

    return(
        <section className="footer">
        <div className="footer__contenedor">
            {footer.map((footer) => ( 
                <div key={footer.id} className="footer__lista">
                    <p>{footer.text}</p>
                </div>
            ))}
        </div>
         <section className="contacto">
            <div className="contacto__contenedor">
                <img src="correo.png" alt="Imagen Correo" className="contacto__contenedorImg"/>
                <img src="twitter.png" alt="Imagen Logo Twitter" className="contacto__contenedorImg"/>
            </div>
         </section>
    </section>
    )




}

export default Footer;