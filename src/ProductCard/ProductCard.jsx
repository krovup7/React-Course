import React from 'react';
import { TextBox } from './TextBox';
import { Price } from './Price';
import style from './ProductCard.module.css';
import { Link } from 'react-router-dom';

export const ProductCard = ({
  product,
  leftPhoto,
  rightPhoto,
  selectPicture,
  pictures,
  selectedIndex,
  selectedPicture,
}) => (
  <div className={style.Main}>
    <div key={product.id} className={style.Card}>
      <div className={style.detalePhotos}>
        <button
          onClick={() => {
            leftPhoto();
          }}
        >
          left
        </button>
        <Link to={'/img/1'}>
          <img className={style.mainPicture} src={selectedPicture} alt={'Main img'} />
        </Link>
        <button
          onClick={() => {
            rightPhoto();
          }}
        >
          right
        </button>
        <ul>
          {pictures.map((item, index) => (
            <li key={index}>
              <img
                src={item.url}
                onClick={() => {
                  selectPicture(index);
                }}
                className={selectedIndex === index && style.selectedPicture}
              alt={'gallery'}/>
            </li>
          ))}
        </ul>
      </div>{' '}
      <TextBox>{product.title}</TextBox>
      <Price price={product.price} />
      <button
        onClick={() => {
          console.log('sdsd');
        }}
      >
        Добавить в корзину
      </button>
      <div>
        <input type={'number'} defaultValue={'1'} />
      </div>
    </div>
  </div>
);
export const ImageView = () => {
  const image = {
    id: 0,
    url:
      'https://mamico.md/i.ashx?i=/i/products/1/9277.jpg',
    main: true,
  };
  if (!image) return <div>Image not found</div>;
  return (
    <div>
      <div
        style={{
          width: '100%',
          height: 400,
        }}
      >
        <img src={image.url} alt={'Big img'} />
      </div>
    </div>
  );
};
