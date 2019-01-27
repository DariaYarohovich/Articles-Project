import {
    DELETE_ARTICLE,
    CHANGE_START_DATE,
    CHANGE_END_DATE,
    CHANGE_SELECTED_TITLE,
    INCREMENT_COUNTER,
    ADD_COMMENT,
    ADD_COMMENT_WITH_ID,
    ADD_COMMENT_ID_IN_ARTICLE
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
        payload: {newComment, articleId}
    }
}

export const addCommentWithId = (newCommentWithId) => {
    return {
        type: ADD_COMMENT_WITH_ID,
        payload: newCommentWithId
    }
}

export const addCommentIdInArticle = (articleId, newCommentId) => {
    return {
        type: ADD_COMMENT_ID_IN_ARTICLE,
        payload: {articleId, newCommentId}
    }
}