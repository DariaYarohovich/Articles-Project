import React, { PureComponent } from 'react';
import Comments from '../../Comments/Comments';
import CSSTransition from 'react-addons-css-transition-group';

import './ArticleItem.css';

class Article extends PureComponent {
    render() {
        const { article: { title } } = this.props;

        return (
            <>
            <button className="article-item__title" type="button" onClick={this.toggleOpen}>{title}</button>
            <CSSTransition
                transitionName="article-item__body"
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

    get body() {
        if (!this.props.isOpen) return null;
        return (
            <article>
                <p>{this.props.article.text}</p>
                <Comments comments={this.props.article.comments} />
            </article>
        )
    }
}

export default Article
