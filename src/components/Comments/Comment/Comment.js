import React from 'react';
import { commentInstanceType } from '../../../types';
import PropTypes from 'prop-types';

import './Comment.css';

const comment = (props) => {
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
    comment: commentInstanceType
}

export default comment;