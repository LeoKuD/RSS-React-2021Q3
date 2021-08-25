import React from 'react'
import style from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer_copy}>Copy, 2021</div>
      <div className={style.footer_text}>Некий текст</div>
    </footer>
  )
}
