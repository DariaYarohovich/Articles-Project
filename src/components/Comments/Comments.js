import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

import './Comments.css';

class Comments extends Component {
    render() {
        return <>{this.comments}</>;
    }

    get comments() {
        const { comments } = this.props;

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
    comments: PropTypes.arrayOf(PropTypes.string)
}

export default Comments;