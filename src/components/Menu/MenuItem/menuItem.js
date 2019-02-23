import React from 'react';
import { NavLink } from 'react-router-dom';
import langConsumer from '../../i18n/lang-consumer';

function menuItem({ to, children, t, ...rest }) {
    return (
        <div className="navigation__item">
            <NavLink to={to} {...rest} activeStyle={{ fontWeight: 700 }}>{t(children)}</NavLink>
        </div>
    )
}

export default langConsumer(menuItem);

