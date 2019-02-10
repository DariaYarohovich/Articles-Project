import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import filtersReducer from './filtersReducer';
import counterReducer from './counterReducer';
import commentsReducer from './commentsReducer';
import commentPaginationReducer from './commentPaginationReducer';

export default combineReducers({
    articles: articlesReducer,
    comments: commentsReducer,
    commentsPagination: commentPaginationReducer,
    filters: filtersReducer,
    counter: counterReducer
});