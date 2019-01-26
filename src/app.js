import React, { Component } from 'react';
import ArticleList from './components/Articles';
import UserForm from './components/UserForm/UserForm';
import Select from './components/Select/Select';
import Datepicker from './components/Datepicker/Datepicker';
import PropTypes from 'prop-types';
import { articleType } from './types';

import './app.css';

class App extends Component {

    render() {
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
                        <Select />
                        <ArticleList/>
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
