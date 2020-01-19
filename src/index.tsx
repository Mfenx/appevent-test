import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import {compose, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducers from './store/reducers/rootReduser'
import thunk from 'redux-thunk'

/*
// interface REDUX_DEVTOOLS
*/
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

/*
// REDUX_DEVTOOLS
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

/*
//store
 */
const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(thunk))
)

localStorage.setItem('token', '12345')

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));


serviceWorker.unregister();
