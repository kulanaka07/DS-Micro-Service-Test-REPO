import * as actionTypes from '../constance/productConstants';
import axios from 'axios';



export const getProducts = () => async (dispatch) => {
    try{
        dispatch({type: actionTypes.GET_PRODUCTS_REQUEST})

        const {data} = await axios.get("/product/products");

        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payplod: data
        })

    }catch(error){
        
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: 
                error.response && error.response.data.message 
                 ? error.response.data.message 
                 : error.message 
        });

    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try{
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST})

        const {data} = await axios.get(`/product/getProduct/${id}`);

        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payplod: data
        })

    }catch(error){
        
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: 
                error.response && error.response.data.message
                 ? error.response.data.message 
                 : error.message 
        });

    }
};

export const removeProductDetails = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_RESET,
    });
};