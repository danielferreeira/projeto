import React, { Component } from "react";
import Produto from "./Produto";
import styled from "styled-components";
import { ProdutoConsumer } from "../../../../context";
import _ from "lodash";
import { buscarProdutos } from "./requests";

export default class ProdutoListar extends Component {

  state = {
    produtos: []
  }

  async componentDidMount() {
    const produtos = await buscarProdutos();

    this.setState({ produtos })
  }

  render() {
    //var VENDEDORES = require('./vendedores.json');
    return (
      <React.Fragment>
        <ProdutoWrapper className="py-5">
          <div className="container">
            <div className="row">
              <ProdutoConsumer>
                {value => {
                  return this.state.produtos.map(produto => {
                    return <Produto key={produto.idproduto} produto={produto} />;
                  });
                }}
              </ProdutoConsumer>
            </div>
          </div>
        </ProdutoWrapper>
      </React.Fragment>
    );
  }
}

const ProdutoWrapper = styled.section``;
