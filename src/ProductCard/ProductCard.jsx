import React from 'react';
import { Image } from './Image';
import { TextBox } from './TextBox';
import { Price } from './Price';
import { Products } from '../constants/Products';
import style from './ProductCard.module.css';
import UAContext from '/context';

export const ProductCard = (props) => {
  const id = props.match.params.id;
  const product = Products.find((product) => product.id === Number(id));
  return (
    <UAContext.Consumer>
      {(context) => (
        <div className={style.Main}>
          <div key={product.id} className={style.Card}>
            <Image src={product.imageUrl} width={300} height={250} alt={'Product'} />
            <TextBox>{product.title}</TextBox>
            <Price price={product.price} />
            <button
              onClick={() => {
                context.addItem(product);
              }}
            >
              Добавить в корзину
            </button>
            <div>
              <input type={'number'} defaultValue={'1'} />
            </div>
          </div>
        </div>
      )}
    </UAContext.Consumer>
  );
};
