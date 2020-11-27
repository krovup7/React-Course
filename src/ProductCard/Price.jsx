import React from 'react'
import style from './ProductCard.module.css'

export const Price=({price})=>{
    return <div className={style.Title}><span style={{marginLeft:'10px'}}>{price}</span></div>
}