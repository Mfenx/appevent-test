import {
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS} from "./actionTypes";


/*
** получение данных возрашает массив
*/
export function fetchProducts() {
    return async (dispatch:any) => {

        dispatch(fetchProductsStart())
        try {
            //получаем данные...ждем
            const products = await fetch('/data.json')
                .then(response => response.json())
                .then(json => json.items)
            //данные пришли - диспатчим в успешный
            dispatch(fetchProductsSuccess(products))
        }catch (err) {
            //данные не пришли - диспатчим в ошибку
            dispatch(fetchProductsError(err))
        }
    }
}

/*
**метод возрашает начальный стейт
 */
export function fetchProductsStart() {
    return {
        type: FETCH_PRODUCTS_START
    }
}

/*
**метод возрашает стейт с измененными продуктами
*/
export function fetchProductsSuccess(products:any) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

/*
**метод возрашает начальный стейт и ошибку
*/
export function fetchProductsError(err:any) {
    return {
        type: FETCH_PRODUCTS_ERROR,
        error: err
    }
}