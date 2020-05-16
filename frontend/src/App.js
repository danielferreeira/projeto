import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProdutoList from "./components/Produto/ProdutoList";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const idpessoa = localStorage.getItem('idpessoa');

  return (
    <Route {...rest} render={props => (
      (idpessoa !== null) ?
        <Component {...props} />
        : <Redirect to="/login" />
    )} />
  );
};

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/" component={ProdutoList} />
          <PrivateRoute exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
