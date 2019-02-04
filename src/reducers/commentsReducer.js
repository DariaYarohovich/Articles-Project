import {
    LOAD_COMMENTS,
    ADD_COMMENT,
    START,
    SUCCESS,
    FAIL
} from '../constants';
import { arrToMap } from './utils';
import { Record } from 'immutable';

const CommentRecord = Record({
    id: null,
    user: null,
    text: null
});

const ReducerState = Record({
    entities: arrToMap([], CommentRecord),
    loading: false,
    loaded: false,
    error: null
})

export default (comments = new ReducerState(), action) => {
    const { type, payload, randomCommentId, response, error } = action;

    switch (type) {
        case ADD_COMMENT:
            return comments
                .update('entities', entities => entities.set(randomCommentId, { ...payload.newComment, id: randomCommentId }))
        case LOAD_COMMENTS + START:
            return comments.set('loading', true);
        case LOAD_COMMENTS + SUCCESS:
            return comments
                .set('loading', false)
                .set('loaded', true)
                .update('entities', entities => entities.concat(arrToMap(response, CommentRecord)))
        case LOAD_COMMENTS + FAIL:
            return comments
                .set('loading', false)
                .set('loaded', false)
                .set('error', error)
        default:
            return comments;
    }
}