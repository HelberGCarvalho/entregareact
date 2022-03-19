import React from "react";

import { Route, BrowserRouter} from "react-router-dom";

import Inicio from "../componentes/Inicio.js";
import Destinos from "../componentes/Destinos.js";
import Promo from "../componentes/Promo.js";
import Contato from "../componentes/Contato.js";

const Routes = () => {

    return (

    <BrowserRouter>
            
            <Route component={Inicio} path="/" exact/>
            <Route component={Destinos} path="/Destinos"/>
            <Route component={Promo} path="/Promo"/>
            <Route component={Contato} path="/Contato"/>
    
    </BrowserRouter>

    );

}

export default Routes;