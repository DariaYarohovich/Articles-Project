import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ArticleList from '../components/Articles/';
import Article from '../components/Articles/ArticleItem';

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
        if (match === null) {
            return <h2>Please, select an article</h2>;
        }

        return <Article key={match.params.id} id={match.params.id} />
    }
}

export default ArticlesPage;