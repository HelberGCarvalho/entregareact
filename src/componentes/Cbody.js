import './Cbody.css';
import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import ClienteService from './services/ClienteService';




    


const Cbody = () => {

	const [nome, setnome] = useState('')
	const [cpf, setcpf] = useState('')
	const [endereco, setendereco] = useState('')
	const [email, setemail] = useState('')
	const {id} = useParams();
	
	let navigate = useNavigate();

	const saveOrUpdateCliente = (e) => {
		e.preventDefault();

		const cliente = {nome, cpf, endereco, email}

		if(id){
			ClienteService.updateCliente(id, cliente).then((response) => {
				navigate('/Lista')
			}).catch(error => {
				console.log(error)
			})
		}else {
			ClienteService.createCliente(cliente).then((response) => {
				console.log(response.data)

				navigate('/Lista');
			}).catch(error => {
				console.log(error)
			})
		}

		ClienteService.createCliente(cliente).then((response) => {

			console.log(response.data)

			navigate('/Lista')

		}).catch(error => {
				console.log(error)
		})
	}


function apagaform() {
		
	document.getElementById('form1').reset();
	document.getElementById('form2').reset();
	document.getElementById('form3').reset();
	document.getElementById('form4').reset();
}



	
useEffect(() => {
	
	ClienteService.getClienteById(id).then((response) => {
		
		setnome(response.data.nome)
		setcpf(response.data.cpf)
		setendereco(response.data.endereco)
		setemail(response.data.email)
	
	}).catch(error => {
		console.log(error)
	})
}, [])


const title = () => {
	if(id) {
		return <h2 className='text-center'>Atualizar Cliente</h2>
	}else{
		return <h2 className='text-center'>Adcionar Cliente</h2>
	}
}

  return (
	
	<div className='container'>

						{
							title()
						}

						<form>
							<div class="form-floating mb-3">
								
								<input 
									id="form1"
									name="nome" 
									maxlength="40" 
									type="text"
									className="form-control" 
									value={nome}
									onChange={(e) => setnome(e.target.value)}
								/> 
									<label className='form-label'>Nome completo</label>
							</div>
							
								<div class="form-floating mb-3">
								<input
								 	id="form2" 
									name="cpf" 
									maxlength="11" 
									type="text"
									class="form-control"
									value={cpf}
									onChange={(e) => setcpf(e.target.value)} 
								/> 
									<label>CPF (apenas números)</label>
							</div>
						
								<div class="form-floating mb-3">
								<input 
									id="form3"
									name="endereco" 
									maxlength="50" 
									type="text"
									class="form-control"
									value={endereco}
									onChange={(e) => setendereco(e.target.value)} 
								/> 
									<label>Endereço (Rua - N° - Bairro - Cidade - UF)</label>
							</div>
							
							
							<div class="form-floating mb-3">
								<input 
									id="form4"
									name="email" 
									maxlength="40" 
									type="text"
									class="form-control"
									value={email}
									onChange={(e) => setemail(e.target.value)} 
								/> 
									<label>Email</label>
							</div>
							

							<button class="btn btn-primary" onClick={(e) => saveOrUpdateCliente(e)}>Cadastrar
								Cliente</button>
							<button class="btn btn-secondary" onClick={(e) => apagaform(e)}>Limpar
								Formulário</button> <br/>


						</form>
                        <br/>
    
    
    
    </div>
  )
}

	
export default Cbody;