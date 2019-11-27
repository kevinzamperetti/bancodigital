import React, { Component } from 'react';
import MenuPrincipal from '../../components/MenuPrincipal'
import api from '../../services/api'
import {Link } from 'react-router-dom'
import InputFiltro from '../../components/InputFiltro';

export default class ListaDeAgencias extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      agencias: []
    }
  }

  componentDidMount() { //ação logo que o componente é exibido em tela
    this.carregaListaDeAgencias()
  }

  carregaListaDeAgencias = async () => {
    const response = await api.get( '/agencias', 
                                    { 'headers': { 'Authorization': 'banco-vemser-api-fake' } } )
    this.setState( { agencias: response.data.agencias }  )
  }

  agenciaDigital( evt ) {
    const id = parseInt(evt.target.value)
    const agencias = this.state.agencias

    if ( evt.target.checked ) {
        for ( let i = 0; i < agencias.length; i++ ) {
            if( agencias[i].id === id ){
              agencias[i].is_digital = true
              localStorage.setItem( agencias[i].id, agencias[i].is_digital )
            }
        }
    } else {
        for ( let i = 0; i < agencias.length; i++ ) {
            if( agencias[i].id === id ) {
              agencias[i].is_digital = false
              localStorage.removeItem( agencias[i].id, agencias[i].is_digital )
            }
        }
    }
    this.setState( { agencias: agencias } )
  } 

  filtrar( evt ) {
    const agencias = this.state.agencias
    const pesquisa = evt.target.value
    if ( pesquisa ) {
      const filtro = agencias.filter( a => a.nome.toLowerCase().includes( pesquisa.toLowerCase() ) || a.codigo == pesquisa )
      this.setState( { agencias: filtro } )
    } else {
      this.carregaListaDeAgencias()
    }
  }

  filtrarAgenciasDigitais( evt ) {
    const agencias = this.state.agencias
    if ( evt.target.checked ) {
      const digitais = agencias.filter( a => localStorage.getItem(a.id) )
      this.setState( { agencias: digitais } )
    } else {
      this.carregaListaDeAgencias()
    }
  }

  render() {
    const { agencias } = this.state
    return (
      <React.Fragment>
        <MenuPrincipal/>
        <InputFiltro filtrar={ this.filtrar.bind( this ) } placeholder="Pesquisar Agências"/>
        <input type="checkbox" name="digital" onClick={ this.filtrarAgenciasDigitais.bind( this ) }/>Somente agências digitais
        <h1>Total de Agências: { this.state.agencias.length } </h1>
        <div className="lista">
          { agencias.map( agencia => (
              <article key={ agencia.id }>
                <strong>Código: { agencia.codigo }</strong> <br/>
                <strong>Agência: { agencia.nome }</strong> <br/>
                {
                  localStorage.getItem(agencia.id)
                  ?
                    <div>
                      <input type="checkbox" name="digital" value={ agencia.id } checked onClick={ this.agenciaDigital.bind( this ) }/>Agência Digital
                    </div> 
                  : 
                  <div>
                    <input type="checkbox" name="digital" value={ agencia.id } onClick={ this.agenciaDigital.bind( this ) }/>Agência Digital
                  </div> 
                }
                <Link to={ `/agencia/${ agencia.id}` }>Detalhes</Link>
              </article>
            ) )
          }
        </div>
      </React.Fragment>
    )
  }
}
