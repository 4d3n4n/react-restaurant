import React from 'react';
import './button.css';

const Button = ({ text, link, icon }) => (
  <a href={link} className="app-button">
    <i class={icon} aria-hidden="true"></i>
    {text}
  </a>
);

export default Button;
