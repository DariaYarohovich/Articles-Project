import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import filtersReducer from './filtersReducer';
import counterReducer from './counterReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
    articles: articlesReducer,
    comments: commentsReducer,
    filters: filtersReducer,
    counter: counterReducer
});