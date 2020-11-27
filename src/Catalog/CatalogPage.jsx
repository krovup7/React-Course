import React from "react";
import {Catalog} from "./Catalog";
import {Products} from '/src/constants/Products'

export const CatalogPage = () => {
    return <Catalog Products={Products}/>
}