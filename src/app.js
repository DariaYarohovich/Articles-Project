import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import ArticlesPage from './routes/articles';
import CommentsPage from './routes/comments';
import Select from './components/Select/Select';
import Datepicker from './components/Datepicker/Datepicker';
import Counter from './components/Counter';

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
                        <div className="navigation">
                            <div className="navigation__item">
                                <NavLink to={"/counter"}  activeStyle={{ fontWeight: 700 }} >Counter</NavLink>
                            </div>
                            <div className="navigation__item">
                                <NavLink to={"/filter"} activeStyle={{ fontWeight: 700 }}>Filter</NavLink>
                            </div>
                            <div className="navigation__item">
                                <NavLink to={"/articles"} activeStyle={{ fontWeight: 700 }}>Articles</NavLink>
                            </div>
                            <div className="navigation__item">
                                <NavLink to={"/comments"} activeStyle={{ fontWeight: 700 }}>Comments</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app__main">
                    <div className="main container">
                        <Route path={"/counter"} component={Counter} />
                        <Route path={"/articles"} component={ArticlesPage} />
                        <Route path={"/comments"} component={CommentsPage} />
                        <Route path={"/filter"} component={Select} />
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
