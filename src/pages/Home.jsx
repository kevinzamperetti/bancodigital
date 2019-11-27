import React, { Component } from 'react';
import MenuPrincipal from '../components/MenuPrincipal'
import {Link } from 'react-router-dom'
import '../App.css'

class Home extends Component {
  constructor( props ) {
    super( props )
    this.props = props
  }  

  render() {

    return (
      <React.Fragment>
        <MenuPrincipal/>

        <div className="lista">
          <article>
            <h1>Lista de Agências</h1>
            <Link to={ `/agencias` }>Ir</Link>
          </article>
        </div>

        <div className="lista">
          <article>
            <h1>Lista de Clientes</h1>
            <Link to={ `/clientes` }>Ir</Link>
          </article>
        </div>
              
        <div className="lista">
          <article>
            <h1>Lista de Tipo de Contas</h1>
            <Link to={ `/tipoContas` }>Ir</Link>
          </article>
        </div>

        <div className="lista">
          <article>
            <h1>Lista de Conta de Clientes</h1>
            <Link to={ `/conta/clientes` }>Ir</Link>
          </article>
        </div>
      </React.Fragment>
    )
  }
}

export default Home;
