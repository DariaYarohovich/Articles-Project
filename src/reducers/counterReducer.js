import { INCREMENT_COUNTER } from '../constants';

export default (counter = 0, action) => {
    const { type } = action;

    switch (type) {
        case INCREMENT_COUNTER:
            return counter + 1;
        default:
            return counter;
    }
}