import React, { PureComponent } from 'react';
import Comments from '../../Comments/Comments';

import './ArticleItem.css';

class Article extends PureComponent {
    render() {
        const { article: { title, comments }, isOpen } = this.props;

        return (
            <>
            <button className="article-item__title" type="button" onClick={this.toggleOpen}>{title}</button>
            {this.body}
            </>
        )
    }

    toggleOpen = () => {
        this.props.toggleArticle(this.props.article.id)
    }

    get body() {
        if (!this.props.isOpen) return null;
        return (
            <>
            <p>{this.props.article.text}</p>
            <Comments comments={this.props.article.comments}/>
            </>
        )
    }
}

export default Article
