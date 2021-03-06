import * as ActionTypes from './ActionTypes';

export const addCart = product => ({
    type: ActionTypes.ADD_CART,
    payload: product
})

export const removeCart = productId =>({
    type: ActionTypes.REMOVE_CART,
    payload: productId
})

export const adjustQty = productId => ({ 
    type: ActionTypes.ADJUST_QTY,
    payload: productId
})