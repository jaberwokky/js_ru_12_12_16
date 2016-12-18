import React, { Component } from 'react'
import CommentList from './CommentList'

export default class Button extends Component {
    state = {
        name: 'Open'
    }

    render() {
        return (
            <div>
                <button onClick = {this.toggleShow}>{this.state.name}></button>
            </div>
        ) 
    }

    toggleShow = () => {
        if (this.state.name == 'Open')
            this.setState({
                name: 'Close'
            }
        ) 
        if (this.state.name == 'Close')
            this.setState({
                name: 'Open'
            }
        )
    }
}
