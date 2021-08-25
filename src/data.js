const apiKey = '&api_key=a30169317af24374d97e8da29c8914e7'
const perPage = '&per_page='
const pageNumb = '&page='
const format = '&format=json&nojsoncallback=1'
const text = '&text='
const minUploadDate = '&min_upload_date='
const maxUploadDate = '&max_upload_date='
const sorti = '$sort='
import { instance } from './services/api'

export const getPhotos = async (
  method,
  param,
  minDate,
  maxDate,
  sort,
  page,
  per
) => {
  const response = await instance.get(
    `${method}${apiKey}${text + param}${minDate && minUploadDate + minDate}${
      maxDate && maxUploadDate + maxDate
    }${sort && sorti + sort}${pageNumb + page}${perPage + per}${format}_w`
  )
  return response
}
