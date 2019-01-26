import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from './ArticleItem';
import accordion from '../../decorators/accordion';
import PropTypes from 'prop-types';
import { articleType } from '../../types';

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
            ariclesFromStore,
            startDate,
            endDate,
            selectedTitles
        } = this.props

        return ariclesFromStore
        .filter(this.filterArticles({startDate: startDate, endDate: endDate, selectedTitles: selectedTitles}))
        .map(article => (
            <li className="article-item" key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openItemId}
                    toggleArticle={toggleOpenArticle}
                />
            </li>
        ))
    }

    filterArticles = (filters) => (elem) => {
        const {
            startDate,
            endDate,
            selectedTitles
        } = filters;

        let titleIsValid = true;
        let startDateIsValid = true;
        let endDateIsVaid = true;

        if (selectedTitles && selectedTitles.length) {
            titleIsValid = selectedTitles.filter(title => title.value === elem.id).length === 1;
        }

        if (startDate) {
            startDateIsValid = new Date(elem.date) >= startDate;
        }

        if (endDate) {
            endDateIsVaid = new Date(elem.date) <= endDate;
        }

        return titleIsValid && startDateIsValid && endDateIsVaid;
    } 
}

ArticleList.propTypes = {
    ariclesFromStore: PropTypes.arrayOf(articleType),
    openItemId: PropTypes.string,
    toggleArticle: PropTypes.func
}

export default connect(
    store => ({ 
        ariclesFromStore: store.articles,
        startDate: store.filters.startDate,
        endDate: store.filters.endDate,
        selectedTitles: store.filters.selectedTitles
    })
)(accordion(ArticleList));
