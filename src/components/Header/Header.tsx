import React, {Component} from 'react'
import './Header.scss'
import {Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";



interface IBasketProps {
    items: any
}




class Header extends Component<IBasketProps>{

    render() {

        const links = [
            {to: '/', label: 'Каталог', exact: true},
            {to: '/basket', label: `Корзина(${this.props.items.length})`, exact:false}
        ]


        let render = links.map((link:any, index:any) => {
                return (
                    <li key={index} >
                        <NavLink to={link.to} exact={link.exact} activeClassName="active">
                            {link.label}
                        </NavLink>
                    </li>
                )
            })


        return (
            <header className="header">
                <h2 className="header__title">APPEVENT TEST</h2>
                <ul className="header__elements">
                    {render}
                </ul>
            </header>
        )
    }
}

const mapStateToProps = (state:any) =>  {
    return {
        items: state.basket.items
    }
}




export default connect(mapStateToProps)(Header)