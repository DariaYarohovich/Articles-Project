import React from 'react';
import PropTypes from 'prop-types';

export const list = (props) => {
    const {
        data,
        getComponent,
        pathToKey,
        listCssClass,
        itemCssClass
    } = props;

    return (
        <ul className={listCssClass}>
            {data.map(entity => {
                return (
                    <li key={pathToKey(entity)} className={itemCssClass}>
                        {getComponent(entity)}
                    </li>
                )
            })}
        </ul>
    )
}

list.defaultProps = {
    data: [],
    getComponent: () => null,
    pathToKey: () => null
}

list.propTypes = {
    data: PropTypes.array,
    getComponent: PropTypes.func.isRequired,
    pathToKey: PropTypes.func.isRequired,
    listCssClass: PropTypes.string,
    itemCssClass: PropTypes.string
}