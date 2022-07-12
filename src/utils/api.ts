import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://api.spaceflightnewsapi.net/v3',
})
