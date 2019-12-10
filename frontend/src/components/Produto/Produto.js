import React, { Component } from "react";
import styled from "styled-components";
import { ProdutoConsumer } from "../../context";
import ProdutoDetails from "./ProdutoDetails";

export default class Produto extends Component {

  state = {
    produtoOpen: null,
  }

  handleDetail = (_Value) => {
    this.setState({ "produtoOpen": _Value });
  }

  render() {
    const { produto, vendedor, other } = this.props;
    const { produtoOpen } = this.state;
    return (
      <ProdutoWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <ProdutoDetails
          open={produtoOpen !== null}
          produto={produtoOpen}
          vendedor={vendedor}
          handleDetail={this.handleDetail}
          other={other}
        />
        <div className="card">
          <ProdutoConsumer>
            {value => {
              return (
                <div
                  className="img-container p-5"
                  onClick={() => this.handleDetail(produto)}
                >
                  <img src={produto.imagem || "https://www.lucastavares.net/wp/wp-content/themes/ctheme/assets/img/img-default.jpg"} alt="" className="card-img-top" />
                  <button
                    className="cart-btn"
                    disabled={produto.inCart ? true : false}
                    onClick={() => {
                      value.addToCart(produto.idproduto);
                      value.openModal(produto.idproduto);
                    }}
                  >
                    {produto.inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        No carrinho
                      </p>
                    ) : (
                        <i className="fas fa-cart-plus" />
                      )}
                  </button>
                </div>
              );
            }}
          </ProdutoConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{produto.nome}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">R$</span>
              {produto.valor}
            </h5>
          </div>
        </div>
      </ProdutoWrapper>
    );
  }
}

const ProdutoWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s ease-in-out;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
