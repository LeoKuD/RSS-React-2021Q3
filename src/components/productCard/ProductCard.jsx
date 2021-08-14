import React from 'react'
import { OrderFormContainer } from '../orderForm/OrderFormContainer'
import s from './ProductCard.module.css'

export const ProductCard = (props) => {
  return (
    <div className={s.product_card_wrapper}>
      <div className={s.product_card_content}>
        <div className={s.pruduct_card_image}>
          <a href="">
            <img src={props.data[0].image} alt="" />
          </a>
        </div>
        <div className={s.product_description}>
          <div className={s.product_name}>{props.data[0].name}</div>
          <div className={s.pruduct_cadr_size}>
            {props.data[0].sizes.map((sizes) => {
              return (
                <span className={s.cadr_sizes_o} key={sizes}>
                  {sizes}
                </span>
              )
            })}
          </div>

          <div className={s.product_card_price}>{props.data[0].price} руб.</div>
        </div>
      </div>
      <OrderFormContainer data={props.data} />
    </div>
  )
}
