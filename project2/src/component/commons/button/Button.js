import React from 'react';
import './button.scss';

const Button = (props) => {
    
    return(
        <button className="text-uppercase"  >{ props.name }</button>
    )
}

export default Button
