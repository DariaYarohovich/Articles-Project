import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from './ArticleItem';
import Loader from '../Loader';
import accordion from '../../decorators/accordion';
import PropTypes from 'prop-types';
import { filteredArticlesSelector, loadingSelector } from '../../selectors';
import { loadArticles } from '../../actionCreators';

import './ArticleList.css';

class ArticleList extends Component {
    render() {
        const { loading } = this.props;

        return (
            loading ? <Loader /> : <ul className="article-list">{this.articles}</ul>
        );
    }

    componentDidMount() {
        !this.props.loaded && this.props.fetchData && this.props.fetchData();
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
    ariclesFromStore: PropTypes.array,
    openItemId: PropTypes.string,
    toggleArticle: PropTypes.func
}

export default connect(
    store => ({
        ariclesFromStore: filteredArticlesSelector(store),
        loading: loadingSelector(store),
        loaded: loadingSelector(store)
    }),
    {
        fetchData: loadArticles
    }
)(accordion(ArticleList));
