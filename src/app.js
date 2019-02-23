import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ArticlesPage from './routes/articles';
import CommentsPage from './routes/comments';
import FiltersPage from './routes/filters';
import Counter from './components/Counter';
import ErrorPage from './routes/error';
import Menu from './components/Menu';
import MenuItem from './components/Menu/MenuItem';
import { Button } from './components/common';

import PropTypes from 'prop-types';
import { articleType } from './types';

import LangProvider from './components/i18n/lang-provider';

import './app.css';

class App extends Component {
    state = {
        lang: "en"
    }

    render() {
        const { lang } = this.state;

        return (
            <div className="app">
                <LangProvider lang={lang}>
                    <div className="app__header">
                        <div className="header container">
                            <div>
                                <Button handleClick={this.handleLangChange} option={"en"} active={lang}>En</Button>
                                <Button handleClick={this.handleLangChange} option={"ru"} active={lang}>Ru</Button>
                            </div>
                            <Menu>
                                <MenuItem to={"/counter"}>counter</MenuItem>
                                <MenuItem to={"/filter"}>filter</MenuItem>
                                <MenuItem to={"/articles"}>articles</MenuItem>
                                <MenuItem to={"/comments"}>comments</MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <div className="app__main">
                        <div className="main container">
                            <Switch>
                                <Route path={"/counter"} component={Counter} />
                                <Route path={"/articles"} component={ArticlesPage} />
                                <Route path={"/comments"} component={CommentsPage} />
                                <Route path={"/filter"} component={FiltersPage} />
                                <Route path={"/error"} component={ErrorPage} />
                                <Redirect from={"/"} to={"/articles"} />
                            </Switch>
                        </div>
                    </div>
                </LangProvider>
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
