import React, { Component } from "react";
import { storeProdutos, detailProduto } from "./data";
import axios from 'axios';
const ProdutoContext = React.createContext();

class ProdutoProvider extends Component {
  state = {
    produtos: [],
    detailProduto: detailProduto,
    cart: [],
    modalOpen: false,
    modalProduto: detailProduto,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };
  //async componentDidMount() {
  //  await this.setProdutos();
  //}

  componentDidMount() {
    var DATABASE = require('./DATABASE.json');
    this.setState(DATABASE);
  }

  setProdutos = async () => {
    let produtos = [];

    const produtosGet = await axios.get('http://localhost:3333/produtos');

    produtos && produtos.data.forEach(item => {
      const singleItem = { ...item };
      produtos = [...produtos, singleItem];
    });

    this.setState(() => {
      return { produtos };
    }, this.checkCartItems);
  };

  getItem = id => {
    const produto = this.state.produtos.find(item => item.id === id);
    return produto;
  };
  handleDetail = id => {
    const produto = this.getItem(id);
    this.setState(() => {
      return { detailProduto: produto };
    });
  };
  addToCart = id => {
    let tempProdutos = [...this.state.produtos];
    const index = tempProdutos.indexOf(this.getItem(id));
    const produto = tempProdutos[index];
    produto.inCart = true;
    produto.count = 1;
    const price = produto.price;
    produto.total = price;

    this.setState(() => {
      return {
        produtos: [...tempProdutos],
        cart: [...this.state.cart, produto],
        detailProduto: { ...produto }
      };
    }, this.addTotals);
  };
  openModal = id => {
    const produto = this.getItem(id);
    this.setState(() => {
      return { modalProduto: produto, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduto = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduto);
    const produto = tempCart[index];
    produto.count = produto.count + 1;
    produto.total = produto.count * produto.price;
    this.setState(() => {
      return {
        cart: [...tempCart]
      };
    }, this.addTotals);
  };
  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduto = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduto);
    const produto = tempCart[index];
    produto.count = produto.count - 1;
    if (produto.count === 0) {
      this.removeItem(id);
    } else {
      produto.total = produto.count * produto.price;
      this.setState(() => {
        return { cart: [...tempCart] };
      }, this.addTotals);
    }
  };
  getTotals = () => {
    // const subTotal = this.state.cart
    //   .map(item => item.total)
    //   .reduce((acc, curr) => {
    //     acc = acc + curr;
    //     return acc;
    //   }, 0);
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    return {
      subTotal,
      tax,
      total
    };
  };
  addTotals = () => {
    const totals = this.getTotals();
    this.setState(
      () => {
        return {
          cartSubTotal: totals.subTotal,
          cartTax: totals.tax,
          cartTotal: totals.total
        };
      },
      () => {
        // console.log(this.state);
      }
    );
  };
  removeItem = id => {
    let tempProdutos = [...this.state.produtos];
    let tempCart = [...this.state.cart];

    const index = tempProdutos.indexOf(this.getItem(id));
    let removedProduto = tempProdutos[index];
    removedProduto.inCart = false;
    removedProduto.count = 0;
    removedProduto.total = 0;

    tempCart = tempCart.filter(item => {
      return item.id !== id;
    });

    this.setState(() => {
      return {
        cart: [...tempCart],
        produtos: [...tempProdutos]
      };
    }, this.addTotals);
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProdutos();
        this.addTotals();
      }
    );
  };
  render() {
    return (
      <ProdutoContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProdutoContext.Provider>
    );
  }
}

const ProdutoConsumer = ProdutoContext.Consumer;

export { ProdutoProvider, ProdutoConsumer };
