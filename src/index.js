import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { Router,browserHistory } from 'react-router';
import { BrowserRouter} from 'react-router-dom';
import RouteLocation from './routes';
import ApolloClient from 'apollo-boost';
import { ApolloProvider} from 'react-apollo';
import App from './components/App';

const client = new ApolloClient({
    uri:'http://localhost:4000/graphql'
})



ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <BrowserRouter>
                <RouteLocation/>
            </BrowserRouter>
        </Provider>
    </ApolloProvider>,
    document.getElementById('naythar'));
