import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ApolloProvider, InMemoryCache, ApolloClient  } from '@apollo/client';
import App from "./App";
import swDev from './services/ServiceRegister'

const client = new ApolloClient({
  uri: "https://spacexdata.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider> ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
swDev();