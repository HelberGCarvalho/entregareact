import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Destinos from './componentes/Destinos.js'
import Contato from './componentes/Contato.js'
import Promo from './componentes/Promo.js'
import ListaClienteComponent from './componentes/ListaClienteComponent';
import Cbody from './componentes/Cbody';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
  
            
            <Route element ={<App/>} path="/" exact/>
            <Route element ={<Destinos/>} path="/Destinos"/>
            <Route element ={<Promo/>} path="/Promo"/>
            <Route element ={<Contato/>} path="/Contato"/>
            <Route element ={<ListaClienteComponent/>} path="/Lista"/>
            <Route element ={<Contato/>} path="/editar-cliente/:id"/>
            
    
   
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
