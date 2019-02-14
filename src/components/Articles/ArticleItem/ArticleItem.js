import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { articleType } from '../../../types';
import { deleteArticle, loadArticle } from '../../../actionCreators';
import ArticleComments from '../ArticleComments';
import { CommentForm } from '../../Comments';
import Loader from '../../Loader';
import CSSTransition from 'react-addons-css-transition-group';
import { articleSelector } from '../../../selectors';

import './ArticleItem.css';

class Article extends PureComponent {
    render() {
        const { article } = this.props;

        if (!article) return null;

        return (
            <>
            {article.title}
            <button className="article-item__delete" type="button" onClick={this.deleteArticle}></button>
            {article.loading ? <Loader key="loader" /> : this.body}
            </>
        )
    }

    componentDidMount(oldProps) {
        const { dispatchLoadArticle, article, id } = this.props;
        if (!article || (!article.text && !article.loading)) {
            dispatchLoadArticle(id);
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
                <article className="article-item__body" key={id}>
                    <p>{text}</p>
                    <CommentForm articleId={id} />
                    <ArticleComments comments={comments} commentsLoaded={commentsLoaded} articleId={id} />
                </article>

            </CSSTransition>
        )
    }
}

Article.propTypes = {
    article: articleType
}

export default connect(
    (store, ownProps) => ({
        article: articleSelector(store, ownProps)
    }),
    dispatch => ({
        dispatchDeleteArticle: id => dispatch(deleteArticle(id)),
        dispatchLoadArticle: id => dispatch(loadArticle(id))
    })
)(Article);
