import React from 'react'
import {Image} from "./Image";
import {TextBox} from "./TextBox";
import {Price} from "./Price";
import {Products} from './constants/Products'
import {Catalog} from "./Catalog";

export const ProductCard = () => {
    return (<div>
        {Products.map(product =>
            <div key={product.id}>
                <Image src={product.imageUrl} width={'100px'} height={'100px'} alt={'Product'}/>
                <TextBox str={product.title}/>
                <Price price={product.price}/>
            </div>
        )}
        <Catalog Products={Products}/>


    </div>)
}