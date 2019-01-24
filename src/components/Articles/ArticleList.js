import React, {Component} from 'react';
import Article from './ArticleItem/index';
import accordion from '../../decorators/accordion';
import PropTypes from 'prop-types';
import { articleType } from '../../types/index';

import './ArticleList.css';

class ArticleList extends Component{
    render() {
        return (
            <ul className="article-list">{this.articles}</ul>
        );
    }

    get articles() {
        const {
            openItemId,
            toggleOpenArticle,
            articles
        } = this.props

        return articles.map(article => (
            <li className="article-item" key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openItemId}
                    toggleArticle={toggleOpenArticle}
                />
            </li>
        ))
    }
}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(articleType),
    openItemId: PropTypes.string,
    toggleArticle: PropTypes.func
}

export default accordion(ArticleList)
