import React, { Component } from 'react';
import { commentInstanceType } from '../../../types';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createCommentSelector } from '../../../selectors';

import './Comment.css';

class Comment extends Component {

    render() {
        const {
            user,
            text
        } = this.props.comment;

        return (
            <article className="comment-item">
                <p className="comment-item__user">{user}</p>
                <p className="comment-text">{text}</p>
            </article>
        );
    }
}

Comment.propTypes = {
    comment: commentInstanceType,
    id: PropTypes.string.isRequired
}

const mapStateToProps = () => {
    const createComment = createCommentSelector();
    return (store, props) => {
        return {
            comment: createComment(store, props)
        }
    }
}

export default connect(mapStateToProps)(Comment);