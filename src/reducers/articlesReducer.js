import {
    DELETE_ARTICLE,
    ADD_COMMENT,
    LOAD_ALL_ARTICLES,
    START,
    SUCCESS,
    FAIL,
    LOAD_ARTICLE,
    LOAD_COMMENTS
} from '../constants';
import { arrToMap } from './utils';
import { Record } from 'immutable';

const ArticleRecord = Record({
    id: null,
    text: null,
    title: null,
    date: null,
    loading: false,
    loaded: false,
    comments: [],
    commentsLoaded: false
});

const ReducerState = Record({
    entities: arrToMap([], ArticleRecord),
    loading: false,
    loaded: false,
    error: null
});

export default (articles = new ReducerState(), action) => {
    const { type, payload, randomCommentId, response, error } = action;

    switch (type) {
        case DELETE_ARTICLE:
            return articles.deleteIn(['entities', payload.id]);
        case ADD_COMMENT:
            return articles.updateIn(
                ['entities', payload.articleId, 'comments'],
                comments => comments.concat(randomCommentId)
            )
        case LOAD_ALL_ARTICLES + START:
            return articles.set('loading', true);
        case LOAD_ALL_ARTICLES + SUCCESS:
            return articles
                .set('loading', false)
                .set('loaded', true)
                .set('entities', arrToMap(response, ArticleRecord))
        case LOAD_ALL_ARTICLES + FAIL:
            return articles
                .set('loading', false)
                .set('loaded', false)
                .set('error', error)
        case LOAD_ARTICLE + START:
            return articles
            .setIn(['entities', payload.id, 'loading'], true)
            .setIn(['entities', payload.id, 'loaded'], false)
        case LOAD_ARTICLE + SUCCESS:
            return articles
                .setIn(['entities', payload.id], response)
                .setIn(['entities', payload.id, 'loading'], false)
                .setIn(['entities', payload.id, 'loaded'], true)
        case LOAD_ARTICLE + FAIL:
            return articles
                .set('loading', false)
                .set('error', error)
        case LOAD_COMMENTS + SUCCESS:
            return articles.setIn(['entities', payload.id, 'commentsLoaded'], true)
        default:
            return articles;
    }
}