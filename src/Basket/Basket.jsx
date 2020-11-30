import React from 'react';
import { Redirect } from 'react-router';

export const Basket = ({ items }) => {
  if (items.length > 0) {
    return items.map((item) => <li key={item.id}>{item.title}</li>);
  } else {
    return <Redirect to={'/'} />;
  }
};
