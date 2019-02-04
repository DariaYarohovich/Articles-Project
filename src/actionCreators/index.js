import {
    DELETE_ARTICLE,
    CHANGE_START_DATE,
    CHANGE_END_DATE,
    CHANGE_SELECTED_TITLE,
    INCREMENT_COUNTER,
    ADD_COMMENT,
    LOAD_ALL_ARTICLES,
    LOAD_ARTICLE,
    LOAD_COMMENTS,
    START,
    SUCCESS,
    FAIL
} from '../constants';

export const deleteArticle = (id) => ({
    type: DELETE_ARTICLE,
    payload: { id }
});

export const changeStartDate = (date) => ({
    type: CHANGE_START_DATE,
    payload: { date }
});

export const changeEndDate = (date) => ({
    type: CHANGE_END_DATE,
    payload: { date }
});

export const changeSelectedTitle = (selected) => {
    return {
        type: CHANGE_SELECTED_TITLE,
        payload: selected
    }
};

export const increment = () => {
    return {
        type: INCREMENT_COUNTER
    }
}

export const addComment = (newComment, articleId) => {
    return {
        type: ADD_COMMENT,
        payload: { newComment, articleId },
        generateId: true
    }
}

export const loadArticles = () => {
    return dispatch => {
        dispatch({
            type: LOAD_ALL_ARTICLES + START
        })
        fetch('/api/article')
            .then(res => res.json())
            .then(response => {
                dispatch({
                    type: LOAD_ALL_ARTICLES + SUCCESS,
                    response
                })
            })
            .catch(error => {
                dispatch({
                    type: LOAD_ALL_ARTICLES + FAIL,
                    error
                })
            })
    }
}

export const loadArticle = (id) => {
    return dispatch => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: { id }
        })
        fetch(`/api/article/${id}`)
            .then(res => res.json())
            .then(response => {
                dispatch({
                    type: LOAD_ARTICLE + SUCCESS,
                    payload: { id },
                    response
                })
            })
            .catch(error => {
                dispatch({
                    type: LOAD_ARTICLE + FAIL,
                    payload: { id },
                    error
                })
            })
    }
}

export const loadComments = (id) => {
    return dispatch => {
        dispatch({
            type: LOAD_COMMENTS + START,
            payload: { id }
        })
        fetch(`/api/comment?article=${id}`)
            .then(res => res.json())
            .then(response => {
                dispatch({
                    type: LOAD_COMMENTS + SUCCESS,
                    payload: { id },
                    response
                })
            })
            .catch(error => {
                dispatch({
                    type: LOAD_COMMENTS + FAIL,
                    payload: { id },
                    error
                })
            })
    }
}