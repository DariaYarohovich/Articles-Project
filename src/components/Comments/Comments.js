import React, { Component } from 'react';
import Comment from './Comment';
import toggleOpen from '../../decorators/toggleOpen';
import CSSTransition from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';

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
        const { 
            comments, 
            opened 
        } = this.props;

        if (!opened) return null;
        return (
            <div className="comments__body">
                {comments.map(id => (
                    <Comment key={id} id={id} />
                ))}
            </div>
        )
    }
}

Comments.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.string),
    handleOpenToggle: PropTypes.func,
    opened: PropTypes.bool
}

export default toggleOpen(Comments);