import React, { Component } from 'react';
import './Nav.css';
import logo from './assets/img/logo-01.svg';


class Nav extends Component {
  render() {
    return(
        <div className="navcontainer"> 

        <div className="logo">
          <img className="logo-thumbnail" src={logo} alt="Logo icon"/>
        </div>

        <div className="nav">
          <div className="pages">
            <p className="nav-items">PRODUCTS</p>
            <p className="nav-items">CART</p>
          </div>

          <div>
            <hr/>
          </div>

          <div className="phrase">
            <p>
                Our hand-made cinnamon rolls
            </p>
          </div>
        </div>

      </div>
    );
  }
}

export default Nav;