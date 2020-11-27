import React from 'react'
import {Image} from "./Image";
import {TextBox} from "./TextBox";
import {Price} from "./Price";
import {Products} from '../constants/Products'
import style from './ProductCard.module.css'
import UAContext from '/context';

export const ProductCard = (props) => {
    let id = props.match.params.id
    let product = Products.find((product) => product.id === Number(id))
    return(<UAContext.Consumer>
            {context=>(
                <div className={style.Main}>
                    <div key={product.id} className={style.Card}>
                        <Image src={product.imageUrl} width={'300px'} height={'250px'} alt={'Product'}/>
                        <TextBox str={product.title}/>
                        <Price price={product.price}/>
                        <button onClick={()=>{context.addItem(product)}}>Добавить в корзину</button>
                    </div>
                </div>
            )}
        </UAContext.Consumer>
        )
}