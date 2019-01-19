import React, { Component } from 'react';

export default (WrappedComponent) =>
    class DecoratedComponent extends Component {
        state = {
            opened: false
        }

        handleOpenToggle = () => {
            this.setState(prevState => {
                return ({ opened: !prevState.opened })
            })
        }

        render() {
            return <WrappedComponent
                {...this.props}
                {...this.state}
                handleOpenToggle={this.handleOpenToggle}
            />;
        }
    }
