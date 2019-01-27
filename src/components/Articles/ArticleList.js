import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from './ArticleItem';
import accordion from '../../decorators/accordion';
import PropTypes from 'prop-types';
import { articleType } from '../../types';
import { filteredArticlesSelector } from '../../selectors';

import './ArticleList.css';

class ArticleList extends Component {
    render() {
        return (
            <ul className="article-list">{this.articles}</ul>
        );
    }

    get articles() {
        const {
            openItemId,
            toggleOpenArticle,
            ariclesFromStore
        } = this.props

        return Object.keys(ariclesFromStore).map(id => (
            <li className="article-item" key={id}>
                <Article
                    article={ariclesFromStore[id]}
                    isOpen={ariclesFromStore[id].id === openItemId}
                    toggleArticle={toggleOpenArticle}
                />
            </li>
        ))
    }
}

ArticleList.propTypes = {
    ariclesFromStore: PropTypes.arrayOf(articleType),
    openItemId: PropTypes.string,
    toggleArticle: PropTypes.func
}

export default connect(
    store => ({
        ariclesFromStore: filteredArticlesSelector(store)
    })
)(accordion(ArticleList));
