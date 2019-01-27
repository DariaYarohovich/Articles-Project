import React, { Component } from 'react';
import './CommentForm.css';
import { connect } from 'react-redux';
import { addComment } from '../../../actionCreators';
import PropTypes from 'prop-types';

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formIsOpened: false,
            user: '',
            text: ''
        };
    }

    render() {
        return (
            <>
            <button className="comments__button" onClick={this.handleFormOpen}>Add comment</button>
            {this.commentForm}
            </>
        )
    }

    get commentForm() {
        const {
            formIsOpened,
            user,
            text
        } = this.state;

        if (!formIsOpened) return null;

        return (
            <div className='comment-form'>
                <div className='comment-form__body'>
                    <i className='comment-form__close' onClick={this.handleFormOpen}></i>
                    <form onSubmit={this.handleAddComment}>
                        <label>
                            <p>User</p>
                            <input type="text" value={user} onChange={this.handleUserChange} />
                        </label>
                        <label>
                            <p>Comment</p>
                            <textarea type="text" value={text} onChange={this.handleTextChange}></textarea>
                        </label>
                        <button className="comments__button" type="submit">Add comment</button>
                    </form>
                </div>
            </div>
        );
    }

    handleUserChange = (event) => {
        this.setState({ user: event.target.value });
    }

    handleTextChange = (event) => {
        this.setState({ text: event.target.value });
    }

    handleFormOpen = () => {
        this.setState(prevState => {
            return { formIsOpened: !prevState.formIsOpened }
        })
    }

    handleAddComment = event => {
        event.preventDefault()

        const {
            user,
            text
        } = this.state;

        const {
            dispatchAddComment,
            articleId
        } = this.props;

        dispatchAddComment({
            user: user,
            text: text
        }, articleId);
        this.handleFormOpen();
    }
}

CommentForm.propTypes = {
    dispatchAddComment: PropTypes.func,
    articleId: PropTypes.string
}

export default connect(null,
    dispatch => ({ dispatchAddComment: (newComment, articleId) => dispatch(addComment(newComment, articleId)) })
)(CommentForm);