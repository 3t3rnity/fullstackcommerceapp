import { FETCH_PRODUCTS, CHANGE_PRODUCTS } from '../actionTypes/mainPageTypes'
import axios from 'axios'

export const changeRoute = url => ({
    type: CHANGE_PRODUCTS,
    payload: url
})

export const fetchProducts = (route) => {
    return async dispatch => {
        const res = await axios.post(`http://localhost:4000${route}`)
        dispatch({
            type: FETCH_PRODUCTS,
            payload: res.data,
            route
        })
    }   
}