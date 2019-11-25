import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProdutoList from "./components/Produto/ProdutoList";
//import HomeVendedor from "./components/HomeVendedor/HomeVendedor";
import HomeUsuario from "./components/HomeUsuario/HomeUsuario";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProdutoList} />
          {/*<Route path="/homevendedor" component={HomeVendedor} />*/}
          <Route path="/homeusuario" component={HomeUsuario} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={ProdutoList} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
