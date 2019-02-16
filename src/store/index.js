import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';
import logger from '../middleware/logger';
import addIdMiddleware from '../middleware/addIdMiddleware';
import history from '../history';
import { routerMiddleware } from 'connected-react-router';

console.log(history);

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        routerMiddleware(history),
        thunk,
        addIdMiddleware,
        logger
    )
);

const store = createStore(
    reducer(history),
    enhancer
);

// For dev needs only
window.store = store;

export default store;