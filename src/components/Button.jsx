import React, { Component } from 'react'

export default class Button extends Component {

    render() {
        return (
            <div>
                <button {...this.props} onClick={this.props.click}>Click Me!</button>
            </div>
        )
    }
}
