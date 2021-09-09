import * as ActionTypes from './ActionTypes';

const initialState = []
export const Cart = ( state = initialState , action) => {
    switch (action.type) {

        case ActionTypes.ADD_CART:
            
            const item = state.filter(prod => prod.productId === action.payload.productId)[0]
            if (item) {
                
                var newState = state.map(product => {
                    if(product.productId === action.payload.productId) {
                        return {...product, qty: product.qty +1}
                    } return product
                })
                return newState
            }
            return state.concat({...action.payload, qty: 1});

        case ActionTypes.REMOVE_CART:
            return state.filter(item => item.productId !== action.payload)

        case ActionTypes.ADJUST_QTY:
            const product = state.filter(prod => prod.productId === action.payload)[0]
            if (product.qty > 1) {
                var newProduct = state.map(product => {
                    if(product.productId === action.payload) {
                        return {...product, qty: product.qty -1}
                    } return product
                })
                return newProduct
            }
            return state
            
        default:
            return state;
    }
}

/*const initialState = []
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
            return state.filter(item => item.productId !== action.payload)

        case ActionTypes.ADJUST_QTY:
            const product = state.filter(prod => prod.productId === action.payload)[0]
            if (product.qty > 1) {
                const newProduct = {...product, qty: product.qty -1}
                const newCart = state.filter(prod => prod.productId !== action.payload)
                return [...newCart, newProduct]
            }
            return state
            
        default:
            return state;
    }
}*/
