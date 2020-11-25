import React from 'react'

export const Catalog=({Products})=>{
    return(
        <div>
            <ul>
                {Products.map(product=>
                    <li key={product.id}>{product.title}</li>
                )}
            </ul>
        </div>
    )
}
