import React from 'react'
import {Link, NavLink} from "react-router-dom";
import style from './Catalog.module.css'
import UAContext from "../../context";

export const Catalog = ({Products}) => {
    return (<UAContext.Consumer>
        {context => (
            <div className={style.Main}>
                <div className={style.Catalog}>
                    <ul>
                        {Products.map(product =>
                            <li key={product.id} className={style.Product}>
                                <div>
                                    <img src={product.imageUrl} alt={'Product'} width={'80px'}/>
                                </div>
                                <div>
                                    <Link to={"/ProductCard/" + product.id}>
                                        {product.title}
                                    </Link>
                                </div>
                                <button onClick={() => {
                                    context.addItem(product)
                                }}>В корзину
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
                <div>
                    <div className={style.Basket}>
                        <NavLink to={'/Basket'}><img
                            src='https://img2.freepng.ru/20180329/zvw/kisspng-computer-icons-shopping-cart-retail-clip-art-shopping-cart-5abdaab0711a27.4162977915223794404633.jpg'
                            alt={'Basket'} width={'50px'}
                            height={'50px'}/></NavLink><span> {context.items.length}</span>
                    </div>
                </div>
            </div>
        )}
    </UAContext.Consumer>)
}
