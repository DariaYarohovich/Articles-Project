import { ADD_COMMENT_WITH_ID } from '../constants';
import { normalizedComments } from '../fixtures';

const initialComments = normalizedComments.reduce((acc, comment) => {
    return {
        ...acc,
        [comment.id]: comment
    }
}, {});

export default (comments = initialComments, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_COMMENT_WITH_ID:
            return { ...comments, ...payload };
        default:
            return comments;
    }
}