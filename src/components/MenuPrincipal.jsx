import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../img/kbank-logo.png'

const MenuPrincipal = props => {

  function logout() {
    localStorage.removeItem('Authorization')
  }

  return (
    <React.Fragment>
      <div className="fundo-azul">
        <img className="logo" src={Logo} alt="..."/>
      </div>
      <section className="menu-principal">
        <Link to="/" >Pagina Inicial</Link>
        <Link to="/agencias">Agências</Link>
        <Link to="/clientes">Clientes</Link>
        <Link to="/tipoContas">Tipo de Contas</Link>
        <Link to="/conta/clientes">Conta de Clientes</Link>
        <Link type="button" onClick={ logout.bind( this ) } href="/login">Logout</Link>
      </section>
    </React.Fragment>
  )
}

export default MenuPrincipal;