import React, { Component } from 'react';
import MenuPrincipal from '../../components/MenuPrincipal'
import api from '../../services/api'
import {Link } from 'react-router-dom'
import InputFiltro from '../../components/InputFiltro';

class ListaDeClientes extends Component {
  constructor( props ) {
    super( props )
    this.state = {
    clientes: []
    }
  }

  componentDidMount() { //ação logo que o componente é exibido em tela
    this.carregaListaDeClientes()
  }

  carregaListaDeClientes = async () => {
    const response = await api.get( '/clientes', 
                                    { 'headers': { 'Authorization': 'banco-vemser-api-fake' } } )
    this.setState( { clientes: response.data.clientes } )
  }

  filtrar( evt ) {
    const clientes = this.state.clientes
    const pesquisa = evt.target.value
    if ( pesquisa ) {
      const filtro = clientes.filter(c => c.nome.toLowerCase().includes(pesquisa.toLowerCase()))
      this.setState( { clientes: filtro } )      
    } else {
      this.carregaListaDeClientes()
    }
  }

  render() {
    const { clientes } = this.state
    
    return (
      <React.Fragment>
        <MenuPrincipal/>
        <InputFiltro filtrar={ this.filtrar.bind( this ) } placeholder="Pesquisar Clientes"/>
        <h1>Total de Clientes: { this.state.clientes.length } </h1>
        <div className="lista">
          { clientes.map( cliente => ( 
              <article key={ cliente.id }>
                <strong>{ cliente.nome }</strong>
                <Link to={ `/cliente/${ cliente.id}` }>Detalhes</Link>
              </article>
            ) ) 
          }
        </div>
      </React.Fragment>    )
  }
}

export default ListaDeClientes;
