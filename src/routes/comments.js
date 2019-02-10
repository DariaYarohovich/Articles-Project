import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CommentsList from '../components/CommentsList';

class CommentsPage extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path={'/comments/:page'} component={this.getComments} />
                    <Route path={'/comments'} component={this.getComments} />
                </Switch>
            </div>
        );
    }


    getComments = ({ match }) => {
        const { page } = match.params;

        if (!page) this.props.history.push('/comments/1');

        return <CommentsList key={page} page={page} />;
    }
}

export default CommentsPage;