import * as actionTypes from '../constance/cartConstants';
import axios from 'axios';


export const addToCart = (id, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`/product/getProduct/${id}`);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product:data._id,
            name: data.productName,
            productDes:data.productDescription,
            qty
        }
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};


export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
};