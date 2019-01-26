import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
    articles: articlesReducer,
    filters: filtersReducer
});