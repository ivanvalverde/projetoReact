import React, { Component } from 'react';
import { search } from './asyncFetch';

export default class Drinks extends Component {

    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        const resultado = search();
        return resultado;
    }

    render() {
        return (
            <div>
                <div>
                    <h1></h1>
                    <img></img>
                </div>
            </div>
        )
    }
}
