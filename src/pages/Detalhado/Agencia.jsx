import React, { Component } from 'react';
import MenuPrincipal from '../../components/MenuPrincipal'
import api from '../../services/api'
import './geral-detalhes.css'

export default class Agencia extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      agencia: []
    }
  }

  async componentDidMount() {
    const { id } = this.props.match.params

    const response = await api.get( `/agencia/${ id -1}`,
                                    { 'headers': { 'Authorization': 'banco-vemser-api-fake' } } )
    this.setState( { agencia: [response.data.agencias] } )
  }

  render() {
    const { agencia } = this.state

    return (
      <React.Fragment>
        <MenuPrincipal/>
        <div className="info">
        { agencia.map( a => ( 
            <article key={ a.id }>
              <strong>Código: { a.codigo }</strong><br/>
              <strong>Agência: { a.nome }</strong><br/>
              <strong className="agencia-digital" >{ localStorage.getItem(a.id) ? 'Esta agência é uma Agência Digital' : ''} </strong>
              <p>Endereço: { a.endereco.logradouro }
                           , { a.endereco.numero } 
                           - { a.endereco.bairro } 
                           - { a.endereco.cidade }
                           - { a.endereco.uf } </p>
            </article>
            ) ) 
          }         
        </div>           
      </React.Fragment>      
    )
  }
}