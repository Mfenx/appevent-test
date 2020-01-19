import {
    ADD_ITEM_TO_BASKET,
    REMOVE_ITEM_FROM_BASKET,
    FETCH_BASKET,
    FETCH_BASKET_START
} from "../actions/actionTypes";

interface State {
    items: [
            {
                id?:string
                name?:string
                image?: string
                price?: string
            }?
        ]
}

const initialState:State = {
    items: []
}

export default function basketReducer(state = initialState, {type, payload}:any) {
    switch (type) {
        case FETCH_BASKET_START:
            return {
                ...state
            }
        case FETCH_BASKET:
            return {
                ...state, items: payload
            }
        case ADD_ITEM_TO_BASKET:
            return {
                ...state, items: [...state.items, payload]
            }
        case REMOVE_ITEM_FROM_BASKET:
            let items:any = state.items.filter((item:any) => item.id !== payload)
            return {
                ...state, items: items
            }
        default:
            return state
    }
}
