import React, { Component } from 'react';
import './inputFiltro.css';

export default class InputFiltro extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor( props ) {
      super( props )
  }

  render() {
    const { filtrar, placeholder } = this.props
    return (
      <React.Fragment>
        <div className="div-input">
          <input type="text" className="input" placeholder={ placeholder } onChange={ filtrar.bind( this ) }/>
        </div>
      </React.Fragment>
    )
  }
}