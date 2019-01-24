import React, { Component } from 'react';
import Comment from './Comment/Comment';
import toggleOpen from '../../decorators/toggleOpen';
import CSSTransition from 'react-addons-css-transition-group';

import './Comments.css';

class Comments extends Component {
    render() {

        let buttonText = this.props.opened ? "Hide comments -" : "Show comments +";

        let comments = null;
        if (this.props.comments && this.props.comments.length > 0) {
            comments = (
                <>
                <button className="comments__button" onClick={this.props.handleOpenToggle}>{buttonText}</button>
                <CSSTransition
                    transitionName="comments__body"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={500}
                >
                    {this.comments}
                </CSSTransition>
                </>
            )
        }

        return <>{comments}</>;
    }

    get comments() {
        if (!this.props.opened) return null;

        const { comments } = this.props;
        return (
            <div className="comments__body">
                {comments.map(comment => (
                    <Comment key={comment.id} {...comment} />
                ))}
            </div>
        )
    }
}

export default toggleOpen(Comments);