import React from 'react'
import './home.scss'
import { useHistory } from 'react-router-dom';
export default function Home(){
    let history = useHistory();

  const redirect = () => {
    history.push('/contacto')
  }
    return(
        <div class="home">
            <div className="strip1">
                
                <div class="logo"><b>R<span>ene</span>Ven<span>tu</span>ra</b></div>
            </div>
            <div className="strip2">
                <div className="col strip2-home-c1">
                    <div className="home1-c1-t">
                    <h2 className="aboutme">Sobre Mi</h2>
                    <p className="p-me">Tengo 20 años y actualmente estoy cursando ingeniería en computación 
                    en la universidad Del Valle de Guatemala. Me apasiona la computación y siempre ando 
                    al tanto de las innovaciones tecnológicas porque me gusta tener retos complejos que requieran 
                    lógica o pensar de una manera abstracta. Me parece la lógica y estructura de escribir código y
                     siempre busco una manera de escribir mi código de la manera más elegante posible.</p>
                    <button class="custom-btn btn-11" onClick={redirect}>Contactame</button>
                    </div>
                </div>
                <div className="col strip2-home-c2">
                    <div className="img-s2"/>
                </div>  
            </div>


            <div className="strip3">
                <div className="col strip3-home-c1">
                <div className="img-s3"/>
                </div>
                <div className="col strip3-home-c2">
                    <div className="home1-c1-t">
                    <h2 className="aboutme">Mi objetivo</h2>
                    <p className="p-me">Me parece interesante la lógica y estructura de escribir código y siempre busco una manera de escribir mi código de la manera más elegante posible. Mi objetivo es que a la hora de resolver un problema logre trasladar el planteamiento del problema a una manera concreta, elegante y estructurada para poder crear una solución eficiente.</p>
                    <button class="custom-btn btn-11" onClick={redirect}>Contactame</button>
                    </div>
                </div>
                
            </div>
            <div className="footer">
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
    )
}