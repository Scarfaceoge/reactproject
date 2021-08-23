import * as ActionTypes from './ActionTypes';

const initialState = []
export const Cart = ( state = initialState , action) => {
    switch (action.type) {

        case ActionTypes.ADD_CART:
            if (state.includes(action.payload)) {
                return state;
            }
            return state.concat(action.payload);

        case ActionTypes.REMOVE_CART:
            return state.filter(item => item !== action.payload)
            
            

        default:
            return state;
    }
}