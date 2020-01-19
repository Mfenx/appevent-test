import React, {Component} from 'react'
import './Header.scss'
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"



interface IBasketProps {
    countItems: number
}


class Header extends Component<IBasketProps>{

    render() {

        const {countItems} = this.props

        //массив c данными для меню
        const links = [
            {to: '/', label: 'Каталог', exact: true},
            {to: '/basket', label: `Корзина(${countItems})`, exact: false}
        ]

        // создаем массив с меню
        let menu = links.map(({to, exact, label}, index) => {
                return (
                    <li key={index}>
                        <NavLink to={to} exact={exact} activeClassName="active">
                            {label}
                        </NavLink>
                    </li>
                )
            }
         )

        return (
            <header className="header">
                <h2 className="header__title">APPEVENT TEST</h2>
                <ul className="header__elements">
                    {menu}
                </ul>
            </header>
        )
    }
}

const mapStateToProps = (state:any) =>  {
    return {
        countItems: state.basket.items.length
    }
}



export default connect(mapStateToProps)(Header)