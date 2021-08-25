import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { instance } from '../../services/api'
const apiKey = '&api_key=a30169317af24374d97e8da29c8914e7'
const method = '?method=flickr.photos.getInfo'
const photoIDstr = '&photo_id='
const format = '&format=json&nojsoncallback=1'
const imgLink = 'https://live.staticflickr.com'

export const Details = () => {
  const [details, setDetails] = useState({})
  const [owner, setOwner] = useState({})
  let { photoId } = useParams()

  const getData = async () => {
    const response = await instance.get(
      `${method}${apiKey}${photoIDstr + photoId}${format}`
    )
    return response.data
  }

  const getDetails = async () => {
    const response = await getData()
    setDetails(response.photo)
    setOwner(response.photo.owner)
  }
  useEffect(() => {
    if (Object.keys(details).length === 0) {
      getDetails()
    }
  }, [details])

  if (Object.keys(details).length === 0) {
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
      <div>Owner: {owner.username}</div>
    </div>
  )
}
