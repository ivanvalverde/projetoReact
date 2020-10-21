import React, { Component } from 'react';
import '../../assets/css/Header.css';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (

            <header className="header">

                <nav className="header-navBar">

                    <a >Drinks</a>
                    <Link to='/sobre' className="header-item-sobre">Sobre Nós</Link>
                    <Link to='/' className="header-item-titulo">Bons Drinks</Link>
                    <a>Nosso Time</a>
                    <Link to='/contatos' className="header-item-contato">Contato</Link>

                </nav>

            </header>

        )
    }
}
