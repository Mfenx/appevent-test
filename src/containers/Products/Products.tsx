import React, {Component} from 'react'
import './Products.scss'
import {Link} from "react-router-dom"
import {connect} from "react-redux"

import {fetchProducts} from '../../store/actions/products'
import {addToBasket} from '../../store/actions/basket'


export interface Items {
    id: string | number
    image: string
    name: string
    price: number | string
}


interface IProductsProps {
    products: any
    items: any
    fetchProducts: any
    addToBasket: any
}

interface IProductsState {
}


class Products extends Component<IProductsProps, IProductsState>{


    componentDidMount(): void {
        this.props.fetchProducts()

    }


    render(){

        let productsCards:any = this.props.products.map((product:any):any => {
            let btn;

            if(this.props.items.some((item:any) => item.id === product.id)){
                btn = <Link to={'/basket'}>
                        <button className="products__element__btn products__element__btn--basket">
                            Оформить заказ
                        </button>
                      </Link>
            }
            else{
                btn = <button
                    className="products__element__btn products__element__btn--add"
                    onClick={() => this.props.addToBasket(product)}
                >
                    Добавить в корзину
                </button>
            }

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
        addToBasket: (item:any) => dispatch(addToBasket(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)