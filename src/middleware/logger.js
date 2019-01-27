export default store => next => action => {
    console.log('Before: ', store.getState());
    console.log('Dispatching: ', action);
    next(action);
    console.log('After: ', store.getState());
}