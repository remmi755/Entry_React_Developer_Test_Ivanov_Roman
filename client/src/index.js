import React from "react";
import "./index.css";
import App from "./App";
import * as ReactDOM from "react-dom/client";

import { ApolloClient } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

import { store } from "./redux/store/store";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ApolloProvider client={ApolloClient}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>
);


