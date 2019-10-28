import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjz3s8bwg1i5901djgo1j8upz/master"
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
