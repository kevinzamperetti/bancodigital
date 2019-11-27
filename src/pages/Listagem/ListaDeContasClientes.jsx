import React, { Component } from 'react';
import MenuPrincipal from '../../components/MenuPrincipal'
import api from '../../services/api'
import {Link } from 'react-router-dom'
import InputFiltro from '../../components/InputFiltro';

class ContasDeClientes extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      contas: []
    }
  }

  componentDidMount() { //ação logo que o componente é exibido em tela
    this.carregaListaDeTiposConta()
  }

  carregaListaDeTiposConta = async () => {
    const response = await api.get( '/conta/clientes', 
                                    { 'headers': { 'Authorization': 'banco-vemser-api-fake' } } )
    this.setState( { contas: response.data.cliente_x_conta } )

  }

  filtrar( evt ) {
    const contas = this.state.contas
    const pesquisa = evt.target.value
    if ( pesquisa ) {
      const filtro = contas.filter( c => c.tipo.nome.toLowerCase().includes( pesquisa.toLowerCase() ) )
      this.setState( { contas: filtro } )      
    } else {
      this.carregaListaDeTiposConta()
    }
  }

  render() {
    const { contas } = this.state
    return (
      <React.Fragment>
        <MenuPrincipal/>
        <InputFiltro filtrar={ this.filtrar.bind( this ) } placeholder="Pesquisar Conta do Cliente"/>
        <h1>Total de Contas de Clientes: { this.state.contas.length } </h1>
        <div className="lista">
          { contas.map( conta => ( 
              <article key={ conta.id }>
                <strong>Conta: { conta.tipo.nome }</strong>
                <p>Cliente: { conta.cliente.nome }</p>
                <Link to={ `/conta/cliente/${ conta.id}` }>Detalhes</Link>
              </article>
            ) ) 
          }
        </div>
      </React.Fragment>
    )
  }
}

export default ContasDeClientes;
