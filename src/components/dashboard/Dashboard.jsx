import React, { useEffect, useState } from 'react'
import { Paginator } from '../../services/utils/paginator'
import s from './Dashboard.module.css'

export const Dashboard = (props) => {
  const imgLink = 'https://live.staticflickr.com'
  const [text, setText] = useState('')
  const [minDate, setMinDate] = useState('')
  const [maxDate, setMaxDate] = useState('')
  const [sort, setSort] = useState('')
  const [localPage, setLocalPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [method, setMethod] = useState('?method=flickr.photos.getRecent')
  const methodSearch = '?method=flickr.photos.search'

  useEffect(() => {
    props.getData(method, text, minDate, maxDate, sort, localPage, perPage)
  }, [sort, localPage, perPage])

  const handlerText = (e) => {
    setText(e.target.value)
  }
  const handlerSubmit = (event) => {
    event.preventDefault()
    setMethod(methodSearch)
    props.getData(method, text, minDate, maxDate, sort, localPage, perPage)
  }
  const handlerDate = (event) => {
    event.preventDefault()
    setMethod(methodSearch)
    props.getData(method, text, minDate, maxDate, sort, localPage, perPage)
  }
  const handlerMinDate = (e) => {
    setMinDate(e.target.value)
  }
  const handlerMaxDate = (e) => {
    setMaxDate(e.target.value)
  }
  const handlerSorti = (e) => {
    if (e.target.value !== sort) {
      setSort(e.target.value)
    }
  }
  const handlerPerPage = (e) => {
    if (e.target.value !== perPage) {
      setPerPage(e.target.value)
    }
  }
  if (!props.preloader) {
    return <div>Loading</div>
  }
  return (
    <div className={s.dash_wrapper}>
      <div className={s.sort}>
        <form className={s.search} onSubmit={handlerSubmit}>
          <div className={s.searchbar_content}>
            <input value={text} type="text" onChange={(e) => handlerText(e)} />
            <button value={false} type="submit">
              Search
            </button>
          </div>
        </form>
        <label className={s.dates} htmlFor="sort">
          Сортировка:
          <select value={sort} name="sort" onChange={handlerSorti}>
            <option value="interestingness-desc"> interes desc</option>
            <option value=" interestingness-asc"> intered asc</option>
            <option value="relevance">Popular</option>
            <option value="date-posted-asc">Date post asc</option>
            <option value="date-posted-desc">Date post desc</option>
          </select>
        </label>

        <form className={s.sortiopt} onSubmit={handlerDate}>
          <div>
            <label htmlFor="startDate">
              Начало:
              <input
                value={minDate}
                placeholder="yyyy-mm-dd"
                type="date"
                name="startDate"
                onChange={(e) => handlerMinDate(e)}
              />
            </label>
            <label htmlFor="endDate">
              Конец:
              <input
                value={maxDate}
                placeholder="yyyy-mm-dd"
                type="date"
                name="endDate"
                onChange={(e) => handlerMaxDate(e)}
              />
            </label>
            <input type="submit" value="OK" />
          </div>
        </form>
        <div className={s.paginator_wrapper}>
          <label htmlFor="page_numb">
            Номер старницы:
            <input
              name="page_numb"
              required
              type="text"
              value={localPage}
              onChange={(e) => setLocalPage(e.target.value)}
            />
          </label>
          <Paginator
            totalItemsCount={props.total}
            setLocalPage={setLocalPage}
            pageSize={perPage}
            currentPage={localPage}
            portionSize={10}
          />
          <label className={s.per_page} htmlFor="perPage">
            Кол-во на странице:
            <select value={perPage} name="perPage" onChange={handlerPerPage}>
              <option value="10">10</option>
              <option value="25"> 25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
        </div>
      </div>

      <div className={s.dash_content}>
        {props.data.map((item, index) => {
          return (
            <div key={index}>
              <div className={s.image_dash_wrapper}>
                <a href="">
                  <img
                    src={`${imgLink}/${item.server}/${item.id}_${item.secret}_w.jpg`}
                    alt=""
                  />
                </a>
              </div>
              <div>Title: {item.title}</div>
              <div>Owner: {item.owner}</div>
              <div></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
