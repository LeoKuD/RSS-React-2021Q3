import React from 'react'
import { HeaderLogo } from './headerLogo/HeaderLogo'
import { HeaderMenu } from './headerMenu/HeaderMenu'
import style from './Header.module.css'

export const Header = () => {
  return (
    <header className={style.header}>
      <HeaderLogo />
      <HeaderMenu />
    </header>
  )
}
