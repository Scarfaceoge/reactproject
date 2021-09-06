import * as ActionTypes from './ActionTypes';

const initialState = []
export const Cart = ( state = initialState , action) => {
    switch (action.type) {

        case ActionTypes.ADD_CART:
            
            const item = state.filter(prod => prod.productId === action.payload.productId)[0]
            if (item) {
                const newItem = {...item, qty: item.qty +1}
                const newState = state.filter(prod => prod.productId !== action.payload.productId)
                return [...newState, newItem]
            }
            return state.concat({...action.payload, qty: 1});

        case ActionTypes.REMOVE_CART:
            return state.filter(item => item !== action.payload)
            
            

        default:
            return state;
    }
}

