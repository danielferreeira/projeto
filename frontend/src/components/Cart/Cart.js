import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { ProdutoConsumer } from "../../context";
import EmptyCart from "./EmptyCart";
export default class Store extends Component {
  render() {
    return (
      <section>
        <ProdutoConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="Seu" title="Carrinho" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProdutoConsumer>
      </section>
    );
  }
}
