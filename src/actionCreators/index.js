import {
    DELETE_ARTICLE,
    CHANGE_START_DATE,
    CHANGE_END_DATE,
    CHANGE_SELECTED_TITLE
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