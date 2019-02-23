import React, { Component } from 'react';
import Select from '../components/Select';
import Datepicker from '../components/Datepicker';

class Filters extends Component {
    render() {
        return (
            <div>
                <Datepicker />
                <Select />
            </div>
        )
    }
}

export default Filters;