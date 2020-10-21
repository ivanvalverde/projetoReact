import React, { Component } from 'react';
import Form from './Form';
import Foto from '../../assets/img/contact-pic.jpg';
import '../../assets/css/Contatos.css';

export default class Contatos extends Component {


    render() {
        return (
            <main className="form-grid fade-in-left">

                <h1 className="form-titulo">Contato</h1>
                <img src={Foto} className="form-foto"></img>
                <Form className="form"/>

            </main>
        )
    }
}
