import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { articleType } from '../../../types';
import { deleteArticle, loadArticle } from '../../../actionCreators';
import Comments from '../../Comments';
import { CommentForm } from '../../Comments';
import Loader from '../../Loader';
import CSSTransition from 'react-addons-css-transition-group';

import './ArticleItem.css';

class Article extends PureComponent {
    render() {
        const { article: { title, loading } } = this.props;

        return (
            <>
            <button className="article-item__title" type="button" onClick={this.toggleOpen}>{title}</button>
            <button className="article-item__delete" type="button" onClick={this.deleteArticle}></button>
            {loading ? <Loader /> : this.body}
            </>
        )
    }

    componentDidUpdate(oldProps) {
        const { isOpen, dispatchLoadArticle, article } = this.props;
        if (!oldProps.isOpen && isOpen && !article.text) {
            dispatchLoadArticle(article.id);
        }
    }

    toggleOpen = () => {
        this.props.toggleArticle(this.props.article.id)
    }

    deleteArticle = () => {
        this.props.dispatchDeleteArticle(this.props.article.id)
    }

    get body() {
        const {
            isOpen,
            article: {
                text,
                id,
                comments,
                commentsLoaded
            }
        } = this.props;

        return (
            <CSSTransition
                transitionName="article-item__container"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={500}
                transitionAppear={true}
                transitionAppearTimeout={500}
            >
                {isOpen ?
                    <article className="article-item__body" key={id}>
                        <p>{text}</p>
                        <CommentForm articleId={id} />
                        <Comments comments={comments} commentsLoaded={commentsLoaded} articleId={id} />
                    </article> : null
                }

            </CSSTransition>
        )
    }
}

Article.propTypes = {
    article: articleType.isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleArticle: PropTypes.func.isRequired
}

export default connect(null,
    dispatch => ({
        dispatchDeleteArticle: id => dispatch(deleteArticle(id)),
        dispatchLoadArticle: id => dispatch(loadArticle(id))
    })
)(Article);
