import React from 'react';

import './Comment.css';

const comment = (props) => {
    return (
        <article className="comment-item">
            <p className="comment-item__user">{props.user}</p>
            <p className="comment-text">{props.text}</p>
        </article>
    );
}

export default comment;