import React, { Component } from 'react'

export default class Comment extends Component {

    render() {
        const { comment } = this.props
        return (
            <div>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        return (
            <section>
                <p><i>{this.props.comment.text}</i></p>
                <p><b>{this.props.comment.user}</b></p>
            </section>
        )   
    }
}
