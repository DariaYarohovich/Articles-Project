import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { deleteArticle } from '../../../actionCreators';
import Comments from '../../Comments';
import CSSTransition from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import { articleType } from '../../../types';

import './ArticleItem.css';

class Article extends PureComponent {
    render() {
        const { article: { title } } = this.props;

        return (
            <>
            <button className="article-item__title" type="button" onClick={this.toggleOpen}>{title}</button>
            <button className="article-item__delete" type="button" onClick={this.deleteArticle}>Delete</button>
            <CSSTransition
                transitionName="article-item__container"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={500}
            >
                {this.body}
            </CSSTransition>
            </>
        )
    }

    toggleOpen = () => {
        this.props.toggleArticle(this.props.article.id)
    }

    deleteArticle = () => {
        this.props.dispatchDeleteArticle(this.props.article.id)
    }

    get body() {
        if (!this.props.isOpen) return null;
        return (
            <article className="article-item__body">
                <p>{this.props.article.text}</p>
                <Comments comments={this.props.article.comments} />
            </article>
        )
    }
}

Article.propTypes = {
    article: articleType.isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleArticle: PropTypes.func.isRequired
}

export default connect(null,
    dispatch => ({ dispatchDeleteArticle: id => dispatch(deleteArticle(id)) })
)(Article);
