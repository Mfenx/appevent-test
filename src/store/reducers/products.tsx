import {
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS
} from "../actions/actionTypes";


const initialState = {
    products: []
}

export default function productsReducer(state = initialState, {type, payload, error}:any) {
    switch (type) {
        case FETCH_PRODUCTS_START:
            return {
                ...state
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state, products: payload
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state, error: error
            }
        default:
            return state
    }
}
