import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSelectedTitle } from '../../actionCreators';
import Select from 'react-select';
import { filteredArticlesSelector, filtersSelector } from '../../selectors';

import './Select.css';

class SelectComp extends Component {
    render() {
        return (
            <div className="select">
                <h3 className="select__title">Article title</h3>
                <Select
                    isMulti={true}
                    options={this.options}
                    value={this.props.selectedOptions}
                    onChange={this.handleSelectChange}
                />
            </div>
        )
    }

    handleSelectChange = (selected) => {
        this.props.dispatchChangeTitle(selected)
    }

    get options() {
        const { articlesFromStore } = this.props;

        return Object.keys(articlesFromStore).map(id => ({
            value: articlesFromStore[id].id,
            label: articlesFromStore[id].title
        }))
    }
}

export default connect(
    store => ({
        articlesFromStore: filteredArticlesSelector(store),
        selectedOptions: filtersSelector(store).selectedTitles
    }),
    dispath => ({
        dispatchChangeTitle: (title) => dispath(changeSelectedTitle(title))
    })
)(SelectComp);