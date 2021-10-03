import { actionTypes } from "../constants/action-types"

export const setProducts = (products) => {
    return {
        type:actionTypes.SET_PRODUCTS,
        payload:products
    };
}

export const selectedtProduct = (product) => {
    return {
        type:actionTypes.SELECTED_PRODUCTS,
        payload:product
    };
}

export const removeSelectedtProduct = () => {
    return {
        type:actionTypes.REMOVE_SELECTED_PRODUCTS,        
    };
}