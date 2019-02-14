import React, { Component } from 'react';
import { connect } from 'react-redux';
import { list as List } from '../../common';
import ArticleComment from '../ArticleComment';
import Loader from '../../Loader';
import toggleOpen from '../../../decorators/toggleOpen';
import CSSTransition from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import { loadComments } from '../../../actionCreators';
import { loadingCommentsSelector, loadedCommentsSelector } from '../../../selectors';

import './ArticleComments.css';

class ArticleComments extends Component {
    render() {

        let buttonText = this.props.opened ? "Hide comments -" : "Show comments +";

        let comments = null;
        if (this.props.comments && this.props.comments.length > 0) {
            comments = (
                <>
                <button className="comments__button" onClick={this.handleButtonClick}>{buttonText}</button>
                <CSSTransition
                    transitionName="comments__body"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={500}
                >
                    {this.props.loading ? <Loader /> : this.comments}
                </CSSTransition>
                </>
            )
        }

        return <>{comments}</>;
    }

    handleButtonClick = () => {
        const { handleOpenToggle, dispatchLoadComments, commentsLoaded } = this.props;

        handleOpenToggle();
        !commentsLoaded && dispatchLoadComments && dispatchLoadComments();
    }

    get comments() {
        const {
            comments,
            opened
        } = this.props;

        if (!opened) return null;
        return (
            <div className="comments__body">
                <List
                    data={comments}
                    pathToKey={entity => entity}
                    getComponent={entity => <ArticleComment id={entity} />}
                    listCssClass="comments__list"
                    itemCssClass="comments__list-item"
                />
            </div>
        )
    }
}

ArticleComments.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.string),
    handleOpenToggle: PropTypes.func,
    opened: PropTypes.bool
}

export default connect(
    store => ({
        loading: loadingCommentsSelector(store),
        loaded: loadedCommentsSelector(store)
    })
    ,
    (dispatch, ownProps) => ({
        dispatchLoadComments: () => dispatch(loadComments(ownProps.articleId))
    })
)(toggleOpen(ArticleComments));