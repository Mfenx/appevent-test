import {
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS} from "../actions/actionTypes";



const initialState = {
    isReady: false,
    products: []
}

export default function productsReducer(state = initialState, action:any) {
    switch (action.type) {
        case FETCH_PRODUCTS_START:
            return {
                ...state, isReady: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state, isReady:false, products: action.payload
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state, isReady:false, error: action.error
            }
        default:
            return state
    }
}
