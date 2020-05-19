import {ADD_PRODUCT, REMOVE_PRODUCT} from "../constants/products"

export const addProduct = (payload)=> {
    return {
        type: ADD_PRODUCT,
        payload
    }
};

export const removeProduct = (payload)=> {
    return {
        type: REMOVE_PRODUCT,
        payload
    }
};
