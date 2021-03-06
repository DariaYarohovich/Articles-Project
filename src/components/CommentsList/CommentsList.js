import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actionCreators';
import {
    commentsPageTotal,
    commentsPageSelector,
    commentsPageLoading,
    commentsPageLoaded
} from '../../selectors';
import Comment from '../Comments/Comment';
import { list as List } from '../common';
import Loader from '../Loader';
import CSSTransition from 'react-addons-css-transition-group';
import { NavLink, Redirect } from 'react-router-dom';

import './CommentsList.css';

class CommentsList extends Component {
    state = {
        countPerPage: 5
    }

    render() {
        const { countPerPage } = this.state;

        const {
            loading,
            page,
            total
        } = this.props;

        if (page > total / countPerPage + 1) {
            return <Redirect to={`/comments/${Math.floor(total / countPerPage) + 1}`} />
        }

        return (
            <div className="commentsPage">
                <div>
                    <CSSTransition
                        transitionName="commentsPage__container"
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={500}
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                    >
                        {loading ? <Loader key="paginationLoader" /> : this.getComments()}
                    </CSSTransition>
                </div>
                <div className="commentsPage__paging">{this.paging}</div>
            </div>
        )
    }

    componentDidMount() {
        const { countPerPage } = this.state;
        const { page, loaded } = this.props;
        !loaded && this.props.dispatchFetchComments && this.props.dispatchFetchComments(page, countPerPage, (page - 1) * countPerPage);
    }

    getComments = () => {
        if (!this.props.commentsPage) return null;

        return (
            <div className="comments__body">
                <List
                    data={this.props.commentsPage}
                    getComponent={entity => <Comment comment={entity} />}
                    pathToKey={entity => entity.id}
                    listCssClass="comments__list"
                    itemCssClass="comments__list-item"
                />
            </div>
        )
    }

    get paging() {
        const { countPerPage } = this.state;
        const { total } = this.props;
        const pages = Math.ceil(total / countPerPage);

        if (pages < 1) return null;
        let paging = [];
        for (let i = 1; i <= pages; i++) {
            paging.push(
                <div className="commentsPage__paging-item" key={i}>
                    <NavLink
                        to={`/comments/${i}`}
                        activeStyle={{ backgroundColor: "salmon", cursor: "default", color: "#ffffff" }}
                    >{i}</NavLink>
                </div>
            );
        }

        return paging;
    }
}

export default connect(
    (store, ownProps) => ({
        total: commentsPageTotal(store),
        commentsPage: commentsPageSelector(store, ownProps),
        loading: commentsPageLoading(store, ownProps),
        loaded: commentsPageLoaded(store, ownProps)
    }),
    dispatch => ({
        dispatchFetchComments: (page, numberOfComments, offset) => dispatch(fetchComments(page, numberOfComments, offset))
    })
)(CommentsList);