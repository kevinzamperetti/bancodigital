import React, { Component } from 'react';
import MenuPrincipal from '../../components/MenuPrincipal'
import api from '../../services/api'
import './geral-detalhes.css'

export default class ContaCliente extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      conta: []
    }
  }

  async componentDidMount() {
    const { id } = this.props.match.params

    const response = await api.get( `/conta/cliente/${ id -1}`,
                                    { 'headers': { 'Authorization': 'banco-vemser-api-fake' } } )
    this.setState( { conta: [response.data.conta] } )
  }

  render() {
    const { conta } = this.state

    return (
      <React.Fragment>
        <MenuPrincipal/>
        <div className="info">
        { conta.map( c => ( 
            <article key={ c.id }>
              <strong>Código: { c.codigo }</strong><br/>
              <strong>Tipo de Conta: { c.tipo.nome }</strong><br/>
              <p>Cliente: { c.cliente.nome } <br/>
                 CPF: { c.cliente.cpf } </p>
            </article>
            ) ) 
          }         
        </div>           
      </React.Fragment> 
    )
  }
}