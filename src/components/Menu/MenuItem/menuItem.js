import React from 'react';
import { NavLink } from 'react-router-dom';

function menuItem({ to, children, ...rest }) {
    return (
        <div className="navigation__item">
            <NavLink to={to} {...rest} activeStyle={{ fontWeight: 700 }}>{children}</NavLink>
        </div>
    )
}

export default menuItem;

