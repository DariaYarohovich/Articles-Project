import uuidv4 from 'uuid';
import { ADD_COMMENT } from '../constants';
import { addCommentWithId, addCommentIdInArticle } from '../actionCreators';

export default store => next => action => {
    if (action.type === ADD_COMMENT) {
        const newCommentId = uuidv4();
        action.payload.newComment.id = newCommentId;
        store.dispatch(addCommentWithId({[newCommentId]: action.payload.newComment}));
        store.dispatch(addCommentIdInArticle(action.payload.articleId, newCommentId));
        return;
    }
    next(action);
}