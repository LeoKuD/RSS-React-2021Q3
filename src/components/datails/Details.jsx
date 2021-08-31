import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetails } from '../../data'
const method = '?method=flickr.photos.getInfo'
const photoIDstr = '&photo_id='
const imgLink = 'https://live.staticflickr.com'

export const Details = () => {
  let { photoId } = useParams()
  const dispatch = useDispatch()
  const details = useSelector((state) => state.details.details)

  useEffect(() => {
    dispatch(getDetails(method, photoIDstr, photoId))
  }, [])
  if (details.length === 0) {
    return <div>Loading</div>
  }
  return (
    <div className="page">
      <div>
        <img
          src={`${imgLink}/${details.server}/${details.id}_${details.secret}.jpg`}
          alt=""
        />
      </div>
      <div> Photo Id: {details.id}</div>
      <div>Secret: {details.secret}</div>
      <div>Server: {details.server}</div>
      <div>Data uploaded: {details.dateuploaded}</div>
      <div>Owner: {details.owner.username}</div>
    </div>
  )
}
