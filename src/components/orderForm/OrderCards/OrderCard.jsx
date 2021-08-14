import React from 'react'
import { Card } from './Card'

export const OrderCard = (props) => {
  return (
    <div>
      {props.formValues.map((item, idx) => {
        return <Card key={idx} item={item} />
      })}
    </div>
  )
}
