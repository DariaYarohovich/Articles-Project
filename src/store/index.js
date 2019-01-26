import { createStore } from 'redux';
import reducer from '../reducers';

const store = createStore(reducer);

// For dev needs only
window.store = store;

export default store;