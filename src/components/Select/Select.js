import React, { Component } from 'react';

import Select from 'react-select';

class SelectComp extends Component {
    state = {
        selected: null
    }

    render() {
        return (
            <Select
                isMulti={true}
                options={this.options}
                value={this.state.selected}
                onChange={this.handleSelectChange}
            />
        )
    }

    handleSelectChange = (selected) => this.setState({ selected })

    get options() {
        return this.props.articles.map(article => ({
            value: article.id,
            label: article.title
        }))
    }
}

export default SelectComp;