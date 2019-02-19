import { createContext } from 'react';

const { Provider, Consumer } = createContext({
    dictionary: {}
});

export { Provider, Consumer };