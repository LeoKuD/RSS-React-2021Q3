import * as axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://www.flickr.com/services/rest/',
  headers: {},
})
