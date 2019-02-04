import uuidv from 'uuid/v1';

export default store => next => action => {
    if (!action.generateId) return next(action);
    next({
        ...action,
        randomCommentId: uuidv()
    });
}