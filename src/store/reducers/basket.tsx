import {
    ADD_ITEM_TO_BASKET,
    REMOVE_ITEM_FROM_BASKET
} from "../actions/actionTypes";

interface State {
    items: [
            {   id?:string
                name?:string
                image?: string
                price?: string
            }?
        ]
}


const initialState:State = {
    items: []
}

export default function basketReducer(state = initialState, action:any) {
    switch (action.type) {
        case ADD_ITEM_TO_BASKET:
            return {
                ...state, items: [...state.items, action.payload]
            }
        case REMOVE_ITEM_FROM_BASKET:
            let items:any = state.items.filter((item:any) => item.id !== action.payload)
            return {
                ...state, items: items
            }
        default:
            return state
    }
}
