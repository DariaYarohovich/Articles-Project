import React from 'react';
import { commentType } from '../../../types/index';

import './Comment.css';

const Comment = (props) => {
    const {
        user,
        text
    } = props.comment;

    return (
        <article className="comment-item">
            <p className="comment-item__user">{user}</p>
            <p className="comment-text">{text}</p>
        </article>
    );
}

Comment.propTypes = {
    comment: commentType
}

export default Comment;