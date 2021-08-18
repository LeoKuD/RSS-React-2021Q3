import React from 'react'
import style from './SearchBar.module.css'

export const SearchBar = () => {
  return (
    <form>
      <div className={style.searchbar_content}>
        <input type="text" />
        <button type="submit">Search</button>
      </div>
    </form>
  )
}
