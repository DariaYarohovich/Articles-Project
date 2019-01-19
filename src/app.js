import React, { Component } from 'react';
import ArticleList from './components/Articles/ArticleList';
import UserForm from './components/UserForm/UserForm';
import Select from './components/Select/Select';
import Datepicker from './components/Datepicker/Datepicker';

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
                        <Select articles={this.props.articles} />
                        <ArticleList
                            articles={this.props.articles}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
