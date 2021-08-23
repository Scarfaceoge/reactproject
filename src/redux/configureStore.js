import { createStore , combineReducers } from 'redux';
import {Images} from './Images';
import {HomeImages} from './HomeImages';
import { Cart } from './Cart';
import {Products} from './Products';


export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        images : Images,
        homeImages: HomeImages,
        products: Products,
        cart : Cart
    }))
    return store
}