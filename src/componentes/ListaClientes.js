import { cleanup } from '@testing-library/react'
import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ClienteService from './services/ClienteService'



const ListaClientes = () => {
  
    const [clientes, setClientes] = useState([])

    useEffect(() => {
     
        getAllClientes();

    }, [])

    const getAllClientes = () => {
        ClienteService.getAllClientes().then((response) => {
            setClientes(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteCliente = (clienteid) => {
        ClienteService.deleteCliente(clienteid).then((response) => {
            getAllClientes();

        }).catch(error => {
            console.log(error);
        })
    }
    

    return (
    <div className='container'>
        <h2 className='text-center'> Lista de Clientes</h2>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Id do Cliente</th>
                <th>Nome Completo</th>
                <th>CPF</th>
                <th>Endereço</th>
                <th>Email</th>
                <th>Ações</th>
            </thead>
            <tbody>
                {
                    clientes.map(
                        clientes =>
                        <tr key = {clientes.id}>
                            <td> {clientes.id} </td>
                            <td> {clientes.nome} </td>
                            <td> {clientes.cpf} </td>
                            <td> {clientes.endereco} </td>
                            <td> {clientes.email} </td> 
                            <td>
                                <Link className='btn btn-info' to={'/editar-cliente/${clienteId}'}>Update</Link>
                                <button className='btn btn-danger' onClick={() => deleteCliente(clientes.id)}
                                style = {{marginLeft:"10Px"}}>Deletar</button>
                            </td>  
                        </tr>
                    )
                }
            </tbody>

        </table>
    </div>
  )
}

export default ListaClientes