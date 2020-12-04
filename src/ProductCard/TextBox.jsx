import React from 'react';
import style from './ProductCard.module.css';

export const TextBox = ({ children }) => (
  <div className={style.Title}>
    <span>{children}</span>
  </div>
);
