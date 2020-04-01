import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SnackbarProvider } from 'notistack';
import { BrowserRouter as Router } from "react-router-dom";
import { ProdutoProvider } from "./context";

ReactDOM.render(
  <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
    <ProdutoProvider>
      <Router>
        <App />
      </Router>
    </ProdutoProvider>
  </SnackbarProvider>,
  document.getElementById("root")
);

