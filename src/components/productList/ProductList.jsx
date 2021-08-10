import React from 'react'
import { Product } from './product/Product'
import style from './ProductList.module.css'

export const ProductList = (props) => {
  return (
    <div className={style.content_products}>
      <Product data={props.data} />
    </div>
  )
}
