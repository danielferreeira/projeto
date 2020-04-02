import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";
import { finalizarPedido } from "./requests";
import PayPalButton from './PayPalButton';

class CartTotals extends Component {

  handleFinalizarPedido(value, clearCart) {
    finalizarPedido(value)
      .then(boleto => {
        var win = window.open('');
        win.document.write(boleto);
        win.document.close();
        win.print();

        clearCart()

        this.props.history.push('/');
      })
  }


  render() {
    const {
      cartSubTotal,
      cartTax,
      cartTotal,
      cart,
      clearCart
    } = this.props.value;

    const emptyCart = cart.length === 0 ? true : false;

    return (
      <React.Fragment>
        {!emptyCart && (
          <div className="container">
            <div className="row">
              <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to="/">
                  <button
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    Limpar carrinho
                  </button>
                </Link>
                <h5>
                  <span className="text-title"> Subtotal :</span>{" "}
                  <strong>R$ {cartSubTotal} </strong>
                </h5>
                <h5>
                  <span className="text-title">Taxas :</span>{" "}
                  <strong>R$ {cartTax} </strong>
                </h5>
                <h5>
                  <span className="text-title">Total :</span>{" "}
                  <strong>R$ {cartTotal} </strong>
                </h5>
                <Button color="primary" variant="outlined" onClick={() => this.handleFinalizarPedido(this.props.value, clearCart)}>Gerar boleto</Button>
                <PayPalButton total={cartTotal} />
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(CartTotals);