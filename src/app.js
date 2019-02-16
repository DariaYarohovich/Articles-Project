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
                        <Menu>
                            <MenuItem to={"/counter"}>Counter</MenuItem>
                            <MenuItem to={"/filter"}>Filter</MenuItem>
                            <MenuItem to={"/articles"}>Articles</MenuItem>
                            <MenuItem to={"/comments"}>Comments</MenuItem>
                        </Menu>
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
            </div >
        );
    }
}

App.propTypes = {
    articles: PropTypes.arrayOf(articleType)
}

export default App;
