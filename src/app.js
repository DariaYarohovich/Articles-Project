import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ArticlesPage from './routes/articles';
import CommentsPage from './routes/comments';
import Select from './components/Select/Select';
import Datepicker from './components/Datepicker/Datepicker';
import Counter from './components/Counter';
import ErrorPage from './routes/error';
import Menu from './components/Menu';
import MenuItem from './components/Menu/MenuItem';
import { Button } from './components/common';

import PropTypes from 'prop-types';
import { articleType } from './types';

import { Provider as DictionaryProvider, Consumer as DictionaryConsumer } from './contexts/dictionary';
import dictionaryFile from './dictionary';

import './app.css';

class App extends Component {
    state = {
        lang: "en"
    }

    render() {
        const { lang } = this.state;
        console.log(dictionaryFile);
        const value = dictionaryFile[lang];

        return (
            <div className="app">
                <DictionaryProvider value={value}>
                    <div className="app__header">
                        <div className="header container">
                            <div>
                                <Button handleClick={this.handleLangChange} option={"en"}>En</Button>
                                <Button handleClick={this.handleLangChange} option={"ru"}>Ru</Button>
                            </div>
                            <Datepicker />
                            <DictionaryConsumer>
                                {value => (
                                    <Menu>
                                        <MenuItem to={"/counter"}>{value.counter}</MenuItem>
                                        <MenuItem to={"/filter"}>{value.filter}</MenuItem>
                                        <MenuItem to={"/articles"}>{value.articles}</MenuItem>
                                        <MenuItem to={"/comments"}>{value.comments}</MenuItem>
                                    </Menu>
                                )}
                            </DictionaryConsumer>
                        </div>
                    </div>
                    <div className="app__main">
                        <div className="main container">
                            <Switch>
                                <Route path={"/counter"} component={Counter} />
                                <Route path={"/articles"} component={ArticlesPage} />
                                <Route path={"/comments"} component={CommentsPage} />
                                <Route path={"/filter"} component={Select} />
                                <Route path={"/error"} component={ErrorPage} />
                                <Redirect from={"/"} to={"/articles"} />
                            </Switch>
                        </div>
                    </div>
                </DictionaryProvider>
            </div >
        );
    }

    handleLangChange = (newLang) => {
        this.setState({ lang: newLang })
    }
}

App.propTypes = {
    articles: PropTypes.arrayOf(articleType)
}

export default App;
