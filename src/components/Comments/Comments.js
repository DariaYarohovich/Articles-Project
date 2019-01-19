import React, { Component } from 'react';
import Comment from './Comment/Comment';
import toggleOpen from '../../decorators/toggleOpen';

import './Comments.css';

class Comments extends Component {
    render() {

        let buttonText = this.props.opened ? "Hide comments -" : "Show comments +";

        let comments = null;
        if (this.props.comments && this.props.comments.length > 0) {
            comments = (
                <>
                <button className="comments__button" onClick={this.props.handleOpenToggle}>{buttonText}</button>
                <section className="comments__list">{this.comments}</section>
                </>
            )
        }

        return <>{comments}</>;
    }

    get comments() {
        if (!this.props.opened) return null;

        const { comments } = this.props;
        return comments.map(comment => (
            <Comment key={comment.id} {...comment} />
        ))
    }
}

export default toggleOpen(Comments);