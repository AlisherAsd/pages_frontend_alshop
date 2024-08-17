import axios from 'axios'
import { REACT_APP_API_ROUTE } from '../utils/consts'

const $host = axios.create({
    baseURL: REACT_APP_API_ROUTE
})

const $AuthHost = axios.create({
    baseURL: REACT_APP_API_ROUTE
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config 
} 

$AuthHost.interceptors.request.use(authInterceptor)

export {
    $AuthHost,
    $host
}