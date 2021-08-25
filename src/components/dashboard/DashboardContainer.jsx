import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getPhotos } from '../../data'
import { Dashboard } from './Dashboard'

export const DashboardContainer = () => {
  const [data, setData] = useState([])
  const [total, setTotal] = useState()
  const [preloader, setPreloader] = useState(false)

  useEffect(() => {
    if (data.length !== 0) {
      setPreloader(true)
    } else {
      setPreloader(false)
    }
  }, [data])

  const getData = async (method, param, minDate, maxDate, sort, page, per) => {
    const response = await getPhotos(
      method,
      param,
      minDate,
      maxDate,
      sort,
      page,
      per
    )
    setData(response.data.photos.photo)
    setTotal(response.data.photos.pages)
  }
  return (
    <div className="page">
      <Dashboard
        data={data}
        getData={getData}
        total={total}
        preloader={preloader}
      />
    </div>
  )
}
