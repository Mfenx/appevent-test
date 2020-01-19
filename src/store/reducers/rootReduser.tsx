import {combineReducers} from 'redux'
import productsReducer from './products'
import basketReducer from "./basket";

export default combineReducers({
    products: productsReducer,
    basket: basketReducer
})