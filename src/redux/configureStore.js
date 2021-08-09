import { createStore , combineReducers } from 'redux';
import {Images} from './Images';
import {HomeImages} from './HomeImages';


export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        images : Images,
        homeImages: HomeImages
    }))
    return store
}