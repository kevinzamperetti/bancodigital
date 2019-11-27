/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute'
import './App.css';

import Login from './pages/Login'
import Home from './pages/Home'
import ListaDeAgencias from './pages/Listagem/ListaDeAgencias';
import Agencia from './pages/Detalhado/Agencia';
import ListaDeClientes from './pages/Listagem/ListaDeClientes';
import Cliente from './pages/Detalhado/Cliente';
import ListaDeTipoContas from './pages/Listagem/ListaDeTipoContas';
import TipoConta from './pages/Detalhado/TipoConta';
import ListaDeContasClientes from './pages/Listagem/ListaDeContasClientes';
import ContaCliente from './pages/Detalhado/ContaCliente';

class App extends Component {
  constructor( props ) {
    super( props )
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Router>
            <section>
              <PrivateRoute exact path="/" component={ Home } />
              <Route path="/login" component={ Login } />
              <PrivateRoute path="/agencias" component={ ListaDeAgencias } />
              <PrivateRoute path="/agencia/:id" component={ Agencia } />
              <PrivateRoute path="/clientes" component={ ListaDeClientes } />
              <PrivateRoute path="/cliente/:id" component={ Cliente } />
              <PrivateRoute path="/tipoContas" component={ ListaDeTipoContas } />
              <PrivateRoute path="/tiposConta/:id" component={ TipoConta } />
              <PrivateRoute path="/conta/clientes" component={ ListaDeContasClientes } />
              <PrivateRoute path="/conta/cliente/:id" component={ ContaCliente } />
            </section>
          </Router>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
