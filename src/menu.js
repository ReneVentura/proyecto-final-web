import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './menu.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './home/home.jsx'
import Foto from '../src/imgs/logo.png'
import Portafolio from './portafolio/portafolio.jsx'
import Contacto from './contacto/contacto.jsx'
export default function Menu(){
    return(
        <Router>
        <div>
        <nav className="site-header sticky-top py-1">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
            <Link className="py-2" to="/" aria-label="Razer">
            <img src={Foto} width="80" height="35" className="d-inline-block align-top" alt=""></img>
            </Link>
            <Link to="/portafolio" id="click-here"className="neon py-2 d-none d-md-inline-block" >Portafolio</Link>
            <Link to="/contacto" id="click-here" className="neon py-2 d-none d-md-inline-block" >Contacto</Link>
         
           

        </div>
        
        </nav>
        
  
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/portafolio">
              <Portafolio/>
            </Route>
            <Route exact path="/contacto">
              <Contacto/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
}