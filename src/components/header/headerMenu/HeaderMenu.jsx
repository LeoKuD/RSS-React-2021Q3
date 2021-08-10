import React from 'react'
import style from './HeaderMenu.module.css'

export const HeaderMenu = () => {
  return (
    <nav className={style.header_menu}>
      <ul className={style.header_list}>
        <li>
          <a href="" className={style.header_link}>
            Пункт меню 2
          </a>
        </li>
        <li>
          <a href="" className={style.header_link}>
            Пункт меню 2
          </a>
        </li>
        <li>
          <a href="" className={style.header_link}>
            Пункт меню 2
          </a>
        </li>
        <li>
          <a href="" className={style.header_link}>
            Пункт меню 2
          </a>
        </li>
      </ul>
      <div className={style.header_burger}>
        <span></span>
      </div>
    </nav>
  )
}
