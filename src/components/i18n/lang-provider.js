import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dictionaries from '../../dictionary';
import { Provider } from './context';

class LangProvider extends Component {
    static propTypes = {
        lang: PropTypes.string
    }

    render() {
        return (
            <Provider value={dictionaries[this.props.lang]}>
                {this.props.children}
            </Provider>
        )
    }
}

export default LangProvider;
