import React from 'react';
import './index.css';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import {ApolloClient, InMemoryCache, ApolloProvider, gql, defaultDataIdFromObject} from '@apollo/client';
import App from './App';


const apolloClient = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache({
        dataIdFromObject: object => {
            switch (object.__typename) {
                case 'CategoryAll':
                    return Math.random()
                default:
                    return defaultDataIdFromObject(object)
            }
        }
    }),
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ApolloProvider client={apolloClient}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ApolloProvider>,
);

export  {apolloClient}