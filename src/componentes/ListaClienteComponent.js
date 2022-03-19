import React from 'react'
import Footer from './Footer';
import Header from './Header';
import ListaClientes from './ListaClientes';
import Navbar from './Navbar';

const ListaClienteComponent = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <ListaClientes/>
        <Footer/>
    </div>
  )
}

export default ListaClienteComponent;