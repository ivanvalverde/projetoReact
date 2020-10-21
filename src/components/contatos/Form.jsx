import React, { Component } from 'react';
import '../../assets/css/Form.css';

export default class Form extends Component {

    render() {
        return (

            <form className="form-wrapper">
                <label className="form-label"> Nome: </label>
                <input type="text" className="form-item-nome form-inputs"></input>
                <label className="form-label"> E-mail: </label>
                <input type="text" className="form-item-email form-inputs"></input>
                <label className="form-label"> Mensagem: </label>
                <textarea className="form-item-mensagem form-inputs textarea"> </textarea >
                <div className="form-div-botao">
                    <p className="form-item-vazio"></p>
                    <button className="form-item-botao">Enviar</button>
                </div>
            </form>

        )
    }
}
