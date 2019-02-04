import React from 'react';
import { createStore, combineReducers } from 'redux';
import reducers from '../../src/reducers/reducers.js';
import shoppingCartReducer from '../../src/reducers/naythar_shoppingcart_reducers';


export const store = createStore(
    combineReducers({
        state: reducers,
        shoppingcart: shoppingCartReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)