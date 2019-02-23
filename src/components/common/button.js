import React from 'react';
import './common.css';

function Button({children, handleClick, option, active, ...rest}) {
    return <button className={`common__btn ${active === option ? `common__btn_active` : ``}`} type="button" onClick={() => handleClick(option)} {...rest}>{children}</button>
}

export { Button };