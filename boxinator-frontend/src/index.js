import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import boxReducer from './components/box.reducer';
import {getBoxes} from './components/box.action';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(boxReducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(getBoxes());

ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>, 
document.getElementById('root')
);