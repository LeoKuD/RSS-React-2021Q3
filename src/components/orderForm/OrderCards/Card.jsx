import React from 'react'
import s from './OrderCard.module.css'

export const Card = (props) => {
  return (
    <div className={s.card}>
      <div>Имя: {props.item.firstName}</div>
      <div>Дата доставки: {props.item.deliveryDate}</div>
      <div>Размер: {props.item.size}</div>
      <div>Получать рассылку? {props.item.follow ? 'Да' : 'Нет'}</div>
      {props.item.follow && <div>Email: {props.item.email}</div>}
    </div>
  )
}
