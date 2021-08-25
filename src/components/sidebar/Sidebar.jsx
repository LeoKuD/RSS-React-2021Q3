import React from 'react'
import { SidebarMenu } from './sidebarMenu/SidebarMenu'
import style from './Sidebar.module.css'

export const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <SidebarMenu />
    </aside>
  )
}
