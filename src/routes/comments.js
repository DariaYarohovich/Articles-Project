import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import CommentsList from '../components/CommentsList';

const CommentsPage = ({ match }) => {
    if (match.isExact) {
        return <Redirect to={"/comments/1"} />;
    }
    return <Route path={"/comments/:page"} component={getComments} />
};

const getComments = ({ match }) => {
    const { page } = match.params;
    return <CommentsList key={page} page={page} />;
}

export default CommentsPage;