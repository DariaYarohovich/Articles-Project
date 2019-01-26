import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSelectedTitle } from '../../actionCreators';

import Select from 'react-select';

class SelectComp extends Component {
    render() {
        return (
            <Select
                isMulti={true}
                options={this.options}
                value={this.props.filters.selectedTitles}
                onChange={this.handleSelectChange}
            />
        )
    }

    handleSelectChange = (selected) => {
        this.props.dispatchChangeTitle(selected)
    }

    get options() {
        return this.props.articlesFromStore.map(article => ({
            value: article.id,
            label: article.title
        }))
    }
}

export default connect(
    store => ({ 
        articlesFromStore: store.articles,
        filters: store.filters
     }),
    dispath => ({ 
        dispatchChangeTitle: (title) => dispath(changeSelectedTitle(title))
    })
)(SelectComp);