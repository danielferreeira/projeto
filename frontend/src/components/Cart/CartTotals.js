import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Dialog, DialogTitle, List, ListItem, ListItemText } from "@material-ui/core";
import { finalizarPedido } from "./requests";
import PayPalButton from './PayPalButton';

class CartTotals extends Component {

  state = {
    modalOpen: false
  }

  handleFinalizarPedido(pagarFrete, value, clearCart) {
    finalizarPedido(pagarFrete, value)
      .then(boleto => {
        var win = window.open('');
        win.document.write(boleto);
        win.document.close();
        win.print();

        clearCart()

        this.props.history.push('/');
      })
  }

  handleCloseModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen })
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
    const valorFrete = cart && cart.map((produto) => produto.frete).reduce((acc, curr) => acc + curr)

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
                  <strong>{Number(Number(cartTotal) + Number(valorFrete)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                </h5>
                <Button color="primary" variant="outlined" onClick={() => this.handleCloseModal()}>Gerar boleto</Button>
                <PayPalButton total={cartTotal} />
              </div>
            </div>
          </div>
        )}
        <Dialog onClose={this.handleCloseModal} aria-labelledby="simple-dialog-title" open={this.state.modalOpen}>
          <DialogTitle id="simple-dialog-title">Você vai retirar o produto com o vendedor?</DialogTitle>
          <List>
            <ListItem button onClick={() => this.handleFinalizarPedido(false, this.props.value, clearCart)} key={1}>
              <ListItemText primary="Sim, pagar boleto sem o frente" />
            </ListItem>
            <ListItem button onClick={() => this.handleFinalizarPedido(true, this.props.value, clearCart)} key={2}>
              <ListItemText primary="Não, pagar boleto com o frente" />
            </ListItem>
          </List>
        </Dialog>
      </React.Fragment>

    );
  }
}

export default withRouter(CartTotals);