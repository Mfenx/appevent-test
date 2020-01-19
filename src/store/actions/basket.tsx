import {
    ADD_ITEM_TO_BASKET,
    REMOVE_ITEM_FROM_BASKET,
} from "./actionTypes";





export function addToBasket(obj:any) {

    return {
        type: ADD_ITEM_TO_BASKET,
        payload: obj
    }
}

export function removeToBasket(id:any) {
    return {
        type: REMOVE_ITEM_FROM_BASKET,
        payload: id
    }
}
