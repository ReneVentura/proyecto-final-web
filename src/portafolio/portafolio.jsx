import React from 'react'
import './portafolio.scss'
import  { Redirect } from 'react-router-dom'
export default function Portafolio(){
    function handleclick1(url) {
        
        window.open('http://3.129.101.133/labs/lab03/ventura3/p1.html','_blank');
      }
      function handleclick2(url) {
        
        window.open('http://3.129.101.133/labs/lab04/ventura19554/mike2.html','_blank');
      }
      function handleclick3(url) {
        
        window.open('http://3.129.101.133/labs/lab10/ventura/dist/index.html','_blank');
      }
      function handleclick4(url) {
        
        window.open('http://stw-uvg.site:3185','_blank');
      }
      function handleclick5(url) {
        
        window.open('http://stw-uvg.site:3232/?path=/story/body-articulos--articulo-1','_blank');
      }

      
    return(
        <div className="portafolio">
            <div className="port-strip1">
            <div class="logo2"><b>P<span>or</span>ta<span>fol</span>io</b></div>
            </div>


            
            <div className="port-strip2">
                <div className="col strip2-port-c1">
                <div className="home1-c1-t">
                    <h2 className="aboutme">HTML</h2>
                    <p className="p-me">LHe desarrollado desde una página de prueba únicamente con HTML hasta combinarlo con otras tecnologías para poder generar un sitio concreto y complejo.</p>
                    <button  class="custom-btn btn-11" onClick={handleclick1}>tecnologia</button>
                    </div>
                </div>
                <div className="col strip2-port-c2">
                    <div className="port-img-s2"/>
                </div>
            </div>
                        
            <div className="port-strip2">

                <div className="col strip2-port-c2">
                    <div className="port-img-s3"/>
                </div>

                <div className="col strip2-port-c1">
                <div className="home1-c1-t">
                    <h2 className="aboutme">CSS</h2>
                    <p className="p-me">He utilizado esta herramienta para mejorar visualmente mis sitios web, desde animaciones hasta generar una estructura correcta y elegante para un sitio.</p>
                    <button  class="custom-btn btn-11" onClick={handleclick2}>tecnologia</button>
                    </div>
                </div>
            </div>

            <div className="port-strip2">
                <div className="col strip2-port-c1">
                <div className="home1-c1-t">
                    <h2 className="aboutme">JavaScript</h2>
                    <p className="p-me">He utilizado este lenguaje para generar funcionalidades de un sitio, incorporar apis para el sitio y también manejar bases de datos no relacionales conectadas al sitio.</p>
                    <button  class="custom-btn btn-11" onClick={handleclick3}>tecnologia</button>
                    </div>
                </div>
                <div className="col strip2-port-c2">
                    <div className="port-img-s4"/>
                </div>
            </div>
                        
            <div className="port-strip2">

                <div className="col strip2-port-c2">
                    <div className="port-img-s5"/>
                </div>

                <div className="col strip2-port-c1">
                <div className="home1-c1-t">
                    <h2 className="aboutme">WebPack</h2>
                    <p className="p-me">Esta herramienta me ha ayudado a optimizar los sitios que he trabajado y hacerlos más compatibles con los navegadores que hoy en día se utilizan.</p>
                    <button  class="custom-btn btn-11" onClick={handleclick4}>tecnologia</button>
                    </div>
                </div>
            </div>

      
            <div className="port-strip2">
                <div className="col strip2-port-c1">
                <div className="home1-c1-t">
                    <h2 className="aboutme">Babel</h2>
                    <p className="p-me">Esta tecnología logra hacer que mi código sea compatible con la mayoría de los navegadores.</p>
                    <button  class="custom-btn btn-11" onClick={handleclick3}>tecnologia</button>
                    </div>
                </div>
                <div className="col strip2-port-c2">
                    <div className="port-img-s6"/>
                </div>
            </div>
                        
            <div className="port-strip2">

                <div className="col strip2-port-c2">
                    <div className="port-img-s7"/>
                </div>

                <div className="col strip2-port-c1">
                <div className="home1-c1-t">
                    <h2 className="aboutme">React</h2>
                    <p className="p-me">React es la herramienta que mejor me ha ayudado a la hora de la creación de sitios ya que ayuda a mantener el sitio actualizado a las tecnologías de hoy en día y ha simplificar el trabajo de la creación de los sitios.</p>
                    <button  class="custom-btn btn-11" onClick={handleclick4}>tecnologia</button>
                    </div>
                </div>
            </div>

      
            <div className="port-strip2">
                <div className="col strip2-port-c1">
                <div className="home1-c1-t">
                    <h2 className="aboutme">es-lint</h2>
                    <p className="p-me">Esta herramienta logra hacer que el código sea lo más optimo y concreto para que sea compatible lo mejor posible.</p>
                    <button  class="custom-btn btn-11" onClick={handleclick3}>tecnologia</button>
                    </div>
                </div>
                <div className="col strip2-port-c2">
                    <div className="port-img-s8"/>
                </div>
            </div>
                        
            <div className="port-strip2">

                <div className="col strip2-port-c2">
                    <div className="port-img-s9"/>
                </div>

                <div className="col strip2-port-c1">
                <div className="home1-c1-t">
                    <h2 className="aboutme">Storybook</h2>
                    <p className="p-me">Storybook ayuda a tener fragmentos más organizados del UI y poder testear diversas funcionalidades de los elementos como también su apariencia.</p>
                    <button class="custom-btn btn-11" onClick={handleclick5} >tecnologia</button>
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