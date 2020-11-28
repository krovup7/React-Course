import React from 'react';
import style from './ProductCard.module.css';

export const TextBox = ({ str }) => (
  <div className={style.Title}>
    <span>{str}</span>
  </div>
);