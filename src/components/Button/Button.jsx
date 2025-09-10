import React from "react";
import '../Button/button.css'

const Button = (
  { text,
    icon,
    variant = 'filled',
    layout = 'text',
    onClick, }
) => {
  return (
    <button
      className={`button button--${variant} button--${layout}`}
      onClick={onClick}>
      {icon && <img src={icon} className='button__icon'></img>}
      {text && <span className='button__text'>{text}</span>}
    </button>
  );
}

export default Button;