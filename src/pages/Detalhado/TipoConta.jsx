import React, { Component } from 'react';
import MenuPrincipal from '../../components/MenuPrincipal'
import api from '../../services/api'
import './geral-detalhes.css'

export default class TipoConta extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      tipoConta: {}
    }
  }

  async componentDidMount() {
    const { id } = this.props.match.params

    const response = await api.get( `/tiposConta/${ id -1}`,
                                    { 'headers': { 'Authorization': 'banco-vemser-api-fake' } } )
    this.setState( { tipoConta: response.data.tipos } )
  }

  render() {
    const { tipoConta } = this.state

    return (
      <React.Fragment>
        <MenuPrincipal/>
        <div className="info">
          <article>
            <h4> ID: { tipoConta.id }</h4>
            <h3> Tipo: { tipoConta.nome }</h3>
          </article>
        </div>  
      </React.Fragment>      
    )
  }
}
