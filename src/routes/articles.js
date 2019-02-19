import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ArticleList from '../components/Articles/';
import Article from '../components/Articles/ArticleItem';
import { Consumer as DictionaryConsumer } from '../contexts/dictionary';

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
            return (
                <DictionaryConsumer>
                    {value => <h2>{value.selectArticle}</h2>}
                </DictionaryConsumer>
            );
        }

        return <Article key={match.params.id} id={match.params.id} />
    }
}

export default ArticlesPage;