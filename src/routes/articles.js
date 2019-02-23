import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ArticleList from '../components/Articles/';
import Article from '../components/Articles/ArticleItem';
import langConsumer from '../components/i18n/lang-consumer';

class ArticlesPage extends Component {
    render() {
        return (
            <div>
                <ArticleList />
                <Route path={'/articles/:id'} children={this.getArticle} />
            </div>
        )
    }

    getArticle = ({ match }) => {
        const { t } = this.props;
        
        if (match === null) {
            return  <h2>{t('selectArticle')}</h2>;
        }

        return <Article key={match.params.id} id={match.params.id} />
    }
}

export default langConsumer(ArticlesPage);