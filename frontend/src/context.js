import React, { Component } from "react";
import { buscarProdutos } from "./components/Produto/request";
const ProdutoContext = React.createContext();

class ProdutoProvider extends Component {
  state = {
    produtos: [],
    detailProduto: {},
    cart: [],
    modalOpen: false,
    modalProduto: {},
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  async componentDidMount() {
    const produtos = await buscarProdutos();

    if (produtos) {
      this.setState({ produtos });
    }
  }

  getItem = idproduto => {
    const produto = this.state.produtos.find(item => item.idproduto === idproduto);
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
    const valorTotal = Number(produto.valor);
    produto.total = valorTotal;

    this.setState({
      produtos: [...tempProdutos],
      cart: [...this.state.cart, produto],
      detailProduto: { ...produto }
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

  increment = idproduto => {
    let tempCart = [...this.state.cart];
    const selectedProduto = tempCart.find(item => {
      return item.idproduto === idproduto;
    });
    const index = tempCart.indexOf(selectedProduto);
    const produto = tempCart[index];
    produto.count = produto.count + 1;
    produto.total = (Number(produto.count) * Number(produto.valor));
    this.setState({ cart: [...tempCart] }, this.addTotals);
  };

  decrement = idproduto => {
    let tempCart = [...this.state.cart];
    const selectedProduto = tempCart.find(item => {
      return item.idproduto === idproduto;
    });
    const index = tempCart.indexOf(selectedProduto);
    const produto = tempCart[index];
    produto.count = produto.count === 0 ? produto.count : produto.count - 1;
    if (produto.count === 0) {
      this.removeItem(idproduto);
    } else {
      produto.total = (Number(produto.count) * Number(produto.valor));
      this.setState({ cart: [...tempCart] }, this.addTotals);
    }
  };

  getTotals = () => {
    const subTotal = this.state.cart
      .map(item => item.total)
      .reduce((acc, curr) => {
        acc = acc + curr;
        return acc;
      }, 0);

    return {
      subTotal: parseFloat(subTotal).toFixed(2),
      tax: 0,
      total: parseFloat(subTotal).toFixed(2)
    };
  };

  addTotals = () => {
    const totals = this.getTotals();

    this.setState({
      cartSubTotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total
    });
  };

  removeItem = idproduto => {
    let tempProdutos = [...this.state.produtos];
    let tempCart = [...this.state.cart];

    const index = tempProdutos.indexOf(this.getItem(idproduto));
    let removedProduto = tempProdutos[index];
    removedProduto.inCart = false;
    removedProduto.count = 0;
    removedProduto.total = 0;

    tempCart = tempCart.filter(item => {
      return item.idproduto !== idproduto;
    });

    this.setState(() => {
      return {
        cart: [...tempCart],
        produtos: [...tempProdutos]
      };
    }, this.addTotals);
  };

  clearCart = () => {
    this.setState({ cart: [] });

    this.state.produtos && this.state.produtos.map(produto => produto.inCart = false);
  };

  render() {
    return (
      <ProdutoContext.Provider
        value={{
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,

          produtos: this.state.produtos,
          cart: this.state.cart,
          detailProduto: this.state.detailProduto,
          modalOpen: this.state.modalOpen,
          modalProduto: this.state.modalProduto,
          cartSubTotal: this.state.cartSubTotal,
          cartTax: this.state.cartTax,
          cartTotal: this.state.cartTotal,
        }}
      >
        {this.props.children}
      </ProdutoContext.Provider>
    );
  }
}

const ProdutoConsumer = ProdutoContext.Consumer;

export { ProdutoProvider, ProdutoConsumer };
