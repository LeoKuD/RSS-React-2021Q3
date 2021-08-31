import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import style from './Product.module.css'

export const Product = (props) => {
  const prod = props.data
  const products = Object.keys(prod).map((id) => {
    return (
      <div key={id} className={style.product_item}>
        <a href="" className={style.product_image}>
          <img src={prod[id].image} alt="" />
        </a>
        <a href="" className={style.products_name}>
          {prod[id].name}
        </a>
        <div className={style.product_options}>
          <div className={style.price}>{prod[id].price}</div>
          <div className={style.size}>
            {prod[id].sizes.map((data) => {
              return (
                <span key={data.id} className={style.o_size}>
                  {data}
                </span>
              )
            })}
          </div>
        </div>
        <div className={style.button_like}>
          <a href="" className={style.products_button}>
            Купить
          </a>
          <div className={style.like}>
            <FavoriteBorderIcon color="secondary" />
          </div>
        </div>
      </div>
    )
  })

  return <div className={style.product_items}>{products}</div>
}
