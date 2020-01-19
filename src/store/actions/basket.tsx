import {
    ADD_ITEM_TO_BASKET,
    FETCH_BASKET,
    FETCH_BASKET_START,
    REMOVE_ITEM_FROM_BASKET,
} from "./actionTypes";

/*
** добавляет товар в корзину
*/
export function addToBasket(obj:[]) {

    return {
        type: ADD_ITEM_TO_BASKET,
        payload: obj
    }
}

/*
** удалем товар в корзину
*/
export function removeToBasket(id:number) {
    return {
        type: REMOVE_ITEM_FROM_BASKET,
        payload: id
    }
}


export function fetchBasket() {
    const token:any = localStorage.getItem('saveproducts')
    return{
        type: FETCH_BASKET,
        payload: JSON.parse(token)
    }

}

export function fetchBasketStart() {
    return {
        type: FETCH_BASKET_START
    }
}