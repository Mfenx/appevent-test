import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Products from '../containers/Products/Products'
import Basket from "../containers/Basket/Basket";


export default (
  <Switch>
    <Route path='/' component={Products} exact />
    <Route path='/basket' component={Basket} />
    <Redirect to={'/'}/>
  </Switch>
)