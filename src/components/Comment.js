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
                {this.props.comment.text}
                {this.props.comment.user}
            </section>
        )   
    }
}
