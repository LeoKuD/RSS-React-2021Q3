import React from 'react'
import s from './HeaderMenu.module.css'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

export const HeaderMenu = () => {
  return (
    <nav className={s.header_menu}>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName={s.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName={s.active}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
