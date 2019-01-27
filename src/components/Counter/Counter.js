import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from '../../actionCreators';

class Counter extends Component {
    render() {
        const {
            counter
        } = this.props;

        return (
            <div>
                <span>{counter}</span>
                <button type='button' onClick={this.handleIncrementClick}>Add</button>
            </div>
        );
    }

    handleIncrementClick = () => {
        this.props.dispatchIncrement();
    }
}

export default connect(
    store => ({
        counter: store.counter
    }),
    dispatch => ({
        dispatchIncrement: () => dispatch(increment())
    })
)(Counter);
