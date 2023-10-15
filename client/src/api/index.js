import axios from 'axios';

export const baseURL = process.env.REACT_APP_apiUrl
export const imagesUrl = process.env.REACT_APP_imagesUrl
const API = axios.create({ baseURL })

export const getData = () => API.get(`/`)

