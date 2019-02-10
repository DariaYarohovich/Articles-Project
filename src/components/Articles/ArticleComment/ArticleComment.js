import React, { Component } from 'react';
import { commentInstanceType } from '../../../types';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createCommentSelector } from '../../../selectors';
import Comment from '../../Comments/Comment';

import './ArticleComment.css';

class ArticleComment extends Component {

    render() {
        return <Comment comment={this.props.comment} />;
    }
}

ArticleComment.propTypes = {
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

export default connect(mapStateToProps)(ArticleComment);