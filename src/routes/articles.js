import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ArticleList from '../components/Articles/';
import Article from '../components/Articles/ArticleItem';

class ArticlesPage extends Component {
    render() {
        return (
            <div>
                <ArticleList />
                <Switch>
                    <Route path={'/articles/:id'} component={this.getArticle} />
                    <Route path={'/articles/'} render={() => <h2>Please, select an article</h2>} />
                </Switch>
            </div>
        )
    }

    getArticle = ({ match }) => {
        return <Article key={match.params.id} id={match.params.id} />
    }
}

export default ArticlesPage;