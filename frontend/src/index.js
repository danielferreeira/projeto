import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SnackbarProvider } from 'notistack';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { ProdutoProvider } from "./context";

ReactDOM.render(
  <SnackbarProvider>
    <ProdutoProvider>
      <Router>
        <App />
      </Router>
    </ProdutoProvider>
  </SnackbarProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
