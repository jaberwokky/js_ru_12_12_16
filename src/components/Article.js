import React, { Component } from 'react'
import CommentList from './CommentList'
import Button from './Button'

export default class Article extends Component {
    state = {
        isOpen: false
    }

    render() {
        const { article } = this.props
        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getBody() {
        if (!this.state.isOpen) return null    
        return (
            <section>
                {this.props.article.text}
                <Button/> 
                <CommentList comments = {this.props.article.comments}/>
            </section>
        )
    }
}
