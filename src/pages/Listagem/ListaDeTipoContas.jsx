import React, { Component } from 'react';
import MenuPrincipal from '../../components/MenuPrincipal'
import api from '../../services/api'
import {Link } from 'react-router-dom'
import InputFiltro from '../../components/InputFiltro';

class TiposDeContas extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      tipos: []
    }
  }

  componentDidMount() { //ação logo que o componente é exibido em tela
    this.carregaListaDeTiposConta()
  }

  carregaListaDeTiposConta = async () => {
    const response = await api.get( '/tipoContas', 
                                    { 'headers': { 'Authorization': 'banco-vemser-api-fake' } } )
    this.setState( { tipos: response.data.tipos } )
  }

  filtrar( evt ) {
    const tipos = this.state.tipos
    const pesquisa = evt.target.value
    if ( pesquisa ) {
      const filtro = tipos.filter( t => t.nome.toLowerCase().includes( pesquisa.toLowerCase() ) )
      this.setState( { tipos: filtro } )
    } else {
      this.carregaListaDeTiposConta()
    }
  }

  render() {
    const { tipos } = this.state
    return (
      <React.Fragment>
        <MenuPrincipal/>
        <InputFiltro filtrar={ this.filtrar.bind( this ) } placeholder="Pesquisar Tipo de Conta"/>
        <h1>Total de Tipos de Contas: { this.state.tipos.length } </h1>
        <div className="lista">
          { tipos.map( tipo => ( 
              <article key={ tipo.id }>
                <strong>{ tipo.nome }</strong>
                <Link to={ `/tiposConta/${ tipo.id}` }>Detalhes</Link>
              </article>
            ) ) 
          }
        </div>
      </React.Fragment>
    )
  }
}

export default TiposDeContas;
