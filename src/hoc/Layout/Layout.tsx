import React, {Component} from 'react';
import './Layout.scss'
import Header from "../../components/Header/Header";


class Layout extends Component{

    render() {
        return (
            <div className="layout">
                <Header/>
                <main className="layout__main">
                    {this.props.children}
                </main>
            </div>
        )
    }
}


export default Layout