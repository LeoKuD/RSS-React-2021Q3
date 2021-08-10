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

  return (
    <div className={style.product_items}>
      {products}
      {/* <div className={style.product_item}>
        <a href="" className={style.product_image}>
          <img src="./assets/img/nike1.jpeg" alt="" />
        </a>
        <a href="" className={style.products_name}>
          Название товара
        </a>
        <div className={style.product_options}>
          <div className={style.price}>370 руб.</div>
          <div className={style.size}>
            {Object.keys(props.data).map((id) => {
              return (
                <span key={id} className={style.o_size}>
                  {props.data[id].sizes}
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
      <div className={style.product_item}>
        <a href="" className={style.product_image}>
          <img src="./assets/img/nike1.jpeg" alt="" />
        </a>
        <a href="" className={style.products_name}>
          Название товара
        </a>
        <div className={style.product_options}>
          <div className={style.price}>370 руб.</div>
          <div className={style.size}>
            <span className={style.o_size}>36</span>
            <span className={style.o_size}>37</span>
            <span className={style.o_size}>38</span>
            <span className={style.o_size}>39</span>
            <span className={style.o_size}>41</span>
            <span className={style.o_size}>43</span>
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
      </div> */}
    </div>
  )
}
