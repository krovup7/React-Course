import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './Catalog.module.css';
import UAContext from '../../context';

export const Catalog = ({ Products }) => (
  <UAContext.Consumer>
    {(context) => (
      <div className={style.Main}>
        <div className={style.Catalog}>
          <ul>
            {Products.map((product) => (
              <li key={product.id} className={style.Product}>
                <div>
                  <img src={product.imageUrl} alt={'Product'} width={'80px'} />
                </div>
                <div>
                  <Link to={`/ProductCard/${product.id}`}>{product.title}</Link>
                </div>
                <button
                  onClick={() => {
                    context.addItem(product);
                  }}
                >
                  В корзину
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className={style.Basket}>
            <NavLink to={'/Basket'}>
              <img
                src="https://bogdn.com/wp-content/uploads/2019/02/shopping-cart.svg"
                alt={'Basket'}
                width={'50px'}
                height={'50px'}
              />
            </NavLink>
            <span> {context.items.length}</span>
          </div>
        </div>
      </div>
    )}
  </UAContext.Consumer>
);
