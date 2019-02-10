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
import Loader from '../Loader';
import CSSTransition from 'react-addons-css-transition-group';
import { NavLink } from 'react-router-dom';

import './CommentsList.css';

class CommentsList extends Component {
    state = {
        countPerPage: 5
    }

    render() {
        const {
            loading,
            loaded
        } = this.props;

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
                        {loading ? <Loader key="paginationLoader" /> : this.comments}
                    </CSSTransition>
                </div>
                <div className="commentsPage__paging">{this.paging}</div>
            </div>
        )
    }

    componentDidMount() {
        console.log('MOUNT');
        const { countPerPage } = this.state;
        const { page, loaded } = this.props;
        !loaded && this.props.dispatchFetchComments && this.props.dispatchFetchComments(page, countPerPage, (page - 1) * countPerPage);
    }

    componentDidUpdate() {
        console.log('UPDATE');
    }

    get comments() {
        if (!this.props.commentsPage) return null;

        return this.props.commentsPage.map((comment, index) => {
            return (
                <Comment key={comment.id} comment={comment} />
            )
        })
    }

    get paging() {
        const { countPerPage } = this.state;

        const {
            total,
            page,
            paginationClick
        } = this.props;

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