import { createContext } from 'react';
import dictionaries from '../../dictionary';

export const { Provider, Consumer } = createContext(dictionaries.en);