import {
    FETCH_COMMENTS_FOR_PAGINATION,
    START,
    SUCCESS,
    FAIL
} from '../constants';
import { Record, OrderedMap } from 'immutable';

const PageRecord = Record({
    entities: new OrderedMap(),
    loading: false,
    loaded: false,
    error: null
})

const ReducerState = Record({
    pages: new OrderedMap({}),
    total: 0
})

export default (commentsPagination = new ReducerState(), action) => {
    const { type, payload, response, error } = action;

    switch (type) {
        case FETCH_COMMENTS_FOR_PAGINATION + START:
            return commentsPagination
            .update('pages', pages => pages.set(payload.page, new PageRecord()))
            .setIn(['pages', payload.page, 'loading'], true)
        case FETCH_COMMENTS_FOR_PAGINATION + SUCCESS:
            return commentsPagination
                .set('total', response.total)
                .setIn(['pages', payload.page, 'loading'], false)
                .setIn(['pages', payload.page, 'loaded'], true)
                .setIn(['pages', payload.page, 'entities'], response.records)
        case FETCH_COMMENTS_FOR_PAGINATION + FAIL:
            return commentsPagination
                .setIn(['pages', payload.page, 'loaded'], false)
                .setIn(['pages', payload.page, 'loading'], false)
                .setIn(['pages', payload.page, 'error'], error)
        default:
            return commentsPagination;
    }
}