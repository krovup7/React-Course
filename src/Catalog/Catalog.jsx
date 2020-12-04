import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './Catalog.module.css';

export const Catalog = ({ products, drag, allowDrop, drop, addProduct, basket }) => (
  <div className={style.Main}>
    <div className={style.Catalog}>
      <ul>
        {products.map((product) => (
          <li key={product.fields.id} className={style.Product}>
            <div
              onDrop={(event) => {
                drop(event);
              }}
              onDragOver={(event) => {
                allowDrop(event);
              }}
            >
              <img
                src={product.imageUrl}
                alt={'Product'}
                width={80}
                draggable="true"
                onDragStart={(event) => {
                  drag(event, product);
                }}
              />
            </div>
            <div>
              <Link to={`/ProductCard/${product.fields.id}`}>{product.fields.title}</Link>
            </div>
            <button
              onClick={() => {
                addProduct(product.fields);
              }}
            >
              В корзину
            </button>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <div
        className={style.Basket}
        onDrop={(event) => {
          drop(event);
        }}
        onDragOver={(event) => {
          allowDrop(event);
        }}
      >
        <NavLink to={'/Basket'}>
          <img
            src="https://bogdn.com/wp-content/uploads/2019/02/shopping-cart.svg"
            alt={'Basket'}
            width={'50px'}
            height={'50px'}
          />
        </NavLink>
        <span> {basket.length}</span>
      </div>
    </div>
  </div>
);
