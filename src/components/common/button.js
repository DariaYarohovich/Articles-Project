import React from 'react';

function Button({children, handleClick, option, ...rest}) {
    return <button type="button" onClick={() => handleClick(option)} {...rest}>{children}</button>
}

export { Button };