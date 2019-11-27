import React, { Component } from 'react';
import MenuPrincipal from '../../components/MenuPrincipal'
import api from '../../services/api'
import './geral-detalhes.css'

export default class Cliente extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      cliente: []
    }
  }

  async componentDidMount() {
    const { id } = this.props.match.params

    const response = await api.get( `/cliente/${ id -1}`,
                                    { 'headers': { 'Authorization': 'banco-vemser-api-fake' } } )
    this.setState( { cliente: [response.data.cliente] } )
  }

  render() {
    const { cliente } = this.state

    return (
      <React.Fragment>
        <MenuPrincipal/>
        <div className="info">
        { cliente.map( c => ( 
            <article key={ c.id }>
              <strong>Cliente: { c.nome }</strong><br/>
              <strong>CPF: { c.cpf }</strong><br/>

                <strong>Agência: { c.agencia.nome.toUpperCase() }</strong> <br/>
                <strong className="agencia-digital" >{ localStorage.getItem(c.agencia.id) ? 'Esta agência é uma Agência Digital' : ''} </strong>
                <p> Endereço: { c.agencia.endereco.logradouro }
                            , { c.agencia.endereco.numero } 
                            - { c.agencia.endereco.bairro } 
                            - { c.agencia.endereco.cidade }
                            - { c.agencia.endereco.uf }
                </p>
            </article>
            ) ) 
          }
        </div>  
      </React.Fragment>      
    )
  }
}
