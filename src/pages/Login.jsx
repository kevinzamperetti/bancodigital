import React, { Component } from 'react'
import * as axios from 'axios';
import '../App.css';
import Logo from '../img/kbank-logo.png'

export default class Login extends Component {
	constructor(props){
		super(props)
		this.state = {
			email: '',
			senha: ''
		}
		this.trocaValoresState = this.trocaValoresState.bind( this )
	}

	trocaValoresState( evt ) {
		const { name, value } = evt.target
		this.setState({
			[name]: value
		})
	}

	logar( evt ) {
		evt.preventDefault();
		const { email, senha } = this.state
		if ( email && senha){
			axios.post( 'http://localhost:1337/login', {
				email: this.state.email,
				senha: this.state.senha
			}).then( resp => {
				localStorage.setItem( 'Authorization', resp.data.token )
				this.props.history.push( "/" )
			} )
		}
	}

	render( ) {
		return  (
			<React.Fragment>
      	<div className="fundo-azul">
	        <img className="logo" src={Logo} alt="..."/>
      	</div>				
				<strong className="login" >Efetue login para acessar o sistema</strong>
				<div className="div-login">
					<span>E-mail: </span>
					<input className="input-login" type="text" name="email" id="email" placeholder="Digite seu e-mail" onChange={this.trocaValoresState} />
					<span>Senha: </span>
					<input className="input-login" type="password" name="senha" id="senha" placeholder="Digite sua senha" onChange={this.trocaValoresState} />
					<button className="button-login" type="button" onClick={ this.logar.bind( this ) } >Login</button>
				</div>
			</React.Fragment>
		)
	}
}
