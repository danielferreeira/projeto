import React, { Component } from "react";
import CartItem from "./CartItem";

export default class CartList extends Component {
  render() {
    const { value } = this.props;
    const { cart } = this.props.value;
    return (
      <div className="container-fluid">
        {cart.map(item => (
          <CartItem key={item.idproduto} item={item} value={value} />
        ))}
      </div>
    );
  }
}
