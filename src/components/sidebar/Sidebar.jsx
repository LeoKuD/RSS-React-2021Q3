import React from 'react'
import { SidebarMenu } from './sidebarMenu/SidebarMenu'
import style from './Sidebar.module.css'
import { SearchBar } from './searchBar/SearchBar'

export const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <SidebarMenu />
      <SearchBar />
    </aside>
  )
}
