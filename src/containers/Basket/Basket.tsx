import React, {Component} from 'react'
import './Basket.scss'
import {connect} from "react-redux";
import {removeToBasket} from "../../store/actions/basket";

interface IBasketProps {
    items: any
    removeToBasket:any
}



class Basket extends Component<IBasketProps>{



    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        let total = this.props.items.reduce((total:any, item:any) => total + item.price, 0)

        let productsRows = this.props.items.map((item:any) => {
            return (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                        <button className="basket__table__btn" onClick={() => this.props.removeToBasket(item.id)}>
                            &times;
                        </button>
                    </td>
                </tr>
            )
        })


        if(!this.props.items.length){
            return <h2 className="content__title">Корзина пуста</h2>
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
        removeToBasket: (id:any) => dispatch(removeToBasket(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)