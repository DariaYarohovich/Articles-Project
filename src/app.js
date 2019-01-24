import React, { Component } from 'react';
import ArticleList from './components/Articles/index';
import UserForm from './components/UserForm/UserForm';
import Select from './components/Select/Select';
import Datepicker from './components/Datepicker/Datepicker';
import PropTypes from 'prop-types';
import { articleType } from './types/index';

import './app.css';

class App extends Component {

    render() {
        const { articles } = this.props;

        return (
            <div className="app">
                <div className="app__header">
                    <div className="header container">
                        <Datepicker />
                        <UserForm />
                    </div>
                </div>
                <div className="app__main">
                    <div className="main container">
                        <Select articles={articles} />
                        <ArticleList
                            articles={articles}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    articles: PropTypes.arrayOf(articleType)
}

export default App;
