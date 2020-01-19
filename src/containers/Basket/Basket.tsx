import React, {Component} from 'react'
import './Basket.scss'
import {connect} from "react-redux";
import {fetchBasket, removeToBasket, fetchBasketStart} from "../../store/actions/basket";

interface IBasketProps {
    items: []
    removeToBasket:any
    fetchBasket: any
    fetchBasketStart: any
}


class Basket extends Component<IBasketProps>{

    componentDidMount(): void {

        if(localStorage.getItem('saveproducts')){
            this.props.fetchBasket()
        }else{
            this.props.fetchBasketStart()
        }
    }

    componentWillUpdate(nextProps: Readonly<IBasketProps>, nextState: Readonly<{}>, nextContext: any): void {
        localStorage.setItem('saveproducts', JSON.stringify(nextProps.items))
    }


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        const {items, removeToBasket} = this.props
        //подсчет общей стоимости товаров
        let total = items.reduce((total:number, {price}) => total + price, 0)

        // создаем массив продуктов в корзине
        let productsRows = items.map(({id, name, price}) => {
            return (
                <tr key={id}>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>
                        <button className="basket__table__btn"
                                onClick={() => removeToBasket(id)}>
                            &times;
                        </button>
                    </td>
                </tr>
            )
        })

        //если массив не пустой
        if(!items.length){
            return <h2 className="content__title--basket">
                Корзина пуста
            </h2>
        }else{
            return (
                <div className="content">
                    <h2 className="content__title">Корзина товаров</h2>
                    <div className="basket basket__wrap">
                        <table className="basket__table">
                            <thead>
                            <tr>
                                <td>Наименование</td>
                                <td>Цена</td>
                                <td>Удалить</td>
                            </tr>
                            </thead>
                            <tbody>
                            {productsRows}
                            </tbody>
                        </table>
                        <h3 className="basket__total">
                            Итого: {total} руб.
                        </h3>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state:any) =>  {
    return {
        items: state.basket.items
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        removeToBasket: (id:number) => dispatch(removeToBasket(id)),
        fetchBasket: () => dispatch(fetchBasket()),
        fetchBasketStart: () => dispatch(fetchBasketStart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)