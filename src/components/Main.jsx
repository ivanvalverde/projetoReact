import React, { Component } from 'react';
import Button from './Button';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.clickMe = this.clickMe.bind(this);
        this.state = {
            loading: false,
        }
    }

    clickMe() {
        console.log("click me!");
        this.setState({loading: true});
        setTimeout(()=>{
            this.setState({loading: false});
        },2000)
    }
    render() {
        return (
            <div className="main">
                <footer>
                    <p className="nomeSite">Bons Drinks</p>
                    <Button click={this.clickMe} disabled={this.state.loading}/>
                </footer>
            </div>
        )
    }
}
