import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import articlesReducer from './articlesReducer';
import filtersReducer from './filtersReducer';
import counterReducer from './counterReducer';
import commentsReducer from './commentsReducer';
import commentPaginationReducer from './commentPaginationReducer';

export default (history) => combineReducers({
    articles: articlesReducer,
    comments: commentsReducer,
    commentsPagination: commentPaginationReducer,
    filters: filtersReducer,
    counter: counterReducer,
    router: connectRouter(history)
});