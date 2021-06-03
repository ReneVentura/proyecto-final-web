import React from 'react'
import './contacto.scss'
import Form from './form.jsx'
export default function Contacto(){
    return(
        <div className="contacto">
            <div className="cont-strip1">
            <div class="logo3"><b>C<span>on</span>ta<span>c</span>to</b></div>
            </div>

            <div className="cc">
                
                <div className="t-cont">
                    <div className="cce">
                        <h1 className="text-cont">Puedes contactarme en</h1>
                    </div>

                    <div className="ce">
                        <p className="p-me">Correo: ravz2609@gmail.com</p>
                    </div>
                    
                    <div className="ce">
                        <p className="p-me">Whatsapp: +502 5244-1838</p>
                    </div>
                    <div className="ce">
                        <a href="https://www.instagram.com/rene_ventura26/" target="_blank">
                            <img className="icon" src="https://icon-library.com/images/white-instagram-icon-png/white-instagram-icon-png-2.jpg"/>
                        </a>
                        <a href="https://www.facebook.com/rene.ventura.2609" target="_blank">
                            <img className="icon" src="https://icon-library.com/images/white-facebook-icon-png/white-facebook-icon-png-29.jpg"/>
                         </a>   
                         <a href="https://api.whatsapp.com/send?phone=50252441938" target="_blank">
                           <img className="icon" src="http://www.clker.com/cliparts/J/d/c/S/q/k/whatsapp-trans-rev1.svg"/>
                         </a>
                
                    </div>
                   
                    </div>
                    
                 
                
            
            </div>
            <div className="cont-form">
                        <Form/>
                    </div>
                
        </div>
    )
}