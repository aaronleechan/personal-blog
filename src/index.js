import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { Router,browserHistory } from 'react-router';
import { BrowserRouter} from 'react-router-dom';
import RouteLocation from './routes';

import App from './components/App';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <RouteLocation/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('naythar'));
