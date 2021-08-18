const api_key = '&api_key=a30169317af24374d97e8da29c8914e7'
const per_page = '&per_page='
const pageNumb = '&page='
const format = '&format=json&nojsoncallback=1'
const text = '&text='
const min_upload_date = '&min_upload_date='
const max_upload_date = '&max_upload_date='
const sorti = '$sort='
import { instance } from './services/api'

export const getPhotos = async (
  method,
  param,
  min_date,
  max_date,
  sort,
  page,
  per
) => {
  const response = await instance.get(
    `${method}${api_key}${text + param}${
      min_date && min_upload_date + min_date
    }${max_date && max_upload_date + max_date}${sort && sorti + sort}${
      pageNumb + page
    }${per_page + per}${format}_w`
  )
  return response
}
