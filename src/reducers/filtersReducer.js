import {
    CHANGE_START_DATE,
    CHANGE_END_DATE,
    CHANGE_SELECTED_TITLE
} from '../constants';

const initialState = {
    startDate: null,
    endDate: null,
    selectedTitles: null
}

export default (filters = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CHANGE_START_DATE:
            return {
                ...filters,
                startDate: payload.date
            };
        case CHANGE_END_DATE:
            return {
                ...filters,
                endDate: payload.date
            };
        case CHANGE_SELECTED_TITLE:
            return {
                ...filters,
                selectedTitles: payload
            };
        default:
            return filters;
    }
}