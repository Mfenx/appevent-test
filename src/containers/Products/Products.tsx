import React, {Component} from 'react'
import './Products.scss'
import {Link} from "react-router-dom"
import {connect} from "react-redux"

import {fetchProducts} from '../../store/actions/products'
import {addToBasket, fetchBasket, fetchBasketStart} from '../../store/actions/basket'


export interface Items {
    id: string | number
    image: string
    name: string
    price: number | string
}

interface IProductsProps {
    products: []
    items: []
    fetchProducts: any
    addToBasket: any
    fetchBasket: any,
    fetchBasketStart: any
}


class Products extends Component<IProductsProps>{

    componentWillMount(): void {
        if(localStorage.getItem('saveproducts')){
            this.props.fetchBasket()
        } else {
            this.props.fetchBasketStart()
        }

    }

    componentDidMount(): void {
        this.props.fetchProducts()
    }

    componentWillUpdate(nextProps: Readonly<IProductsProps>, nextState: Readonly<{}>, nextContext: any): void {
        localStorage.setItem('saveproducts', JSON.stringify(nextProps.items))
    }

    render(){

        const {products, items, addToBasket} = this.props

        //создаем массив товаров
        let productsCards = products.map((product:Items) => {

            // меняем кпокпку, если ид соотвествует ид в корзине
            let btn;

            if(items.some(({id}) => id === product.id)){
                btn = <Link to={'/basket'}>
                        <button className="products__element__btn products__element__btn--basket">
                            Оформить заказ
                        </button>
                      </Link>
            }else{
                btn = <button
                        className="products__element__btn products__element__btn--add"
                        onClick={() => addToBasket(product)}>
                            Добавить в корзину
                      </button>
            }

            // создаем один товар
            return (
                <div className="products__element" key={product.id}>
                    <div className="products__element__images">
                        <img
                            className="products__element__images--pict"
                            src={product.image}
                            alt={product.name}
                        />
                    </div>
                    <h4 className="products__element__title">
                        <Link to={`/phones/${product.id}`}>{product.name}</Link>
                    </h4>
                    <div className="products__element__info">
                        <p className="products__element__price">Цена:<strong>{product.price} руб.</strong></p>
                        {btn}
                    </div>
                </div>
                )
        });

        //создаем список товаров
        return (
            <div className="content">
                <h2 className="content__title">Католог товаров</h2>
                <div className="products products__wrap">
                    {productsCards}
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state:any) =>  {
    return {
        products: state.products.products,
        items: state.basket.items
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        addToBasket: (item:[]) => dispatch(addToBasket(item)),
        fetchBasket: () => dispatch(fetchBasket()),
        fetchBasketStart: () => dispatch(fetchBasketStart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)