import React, { Component } from "react";
import Produto from "./Produto";
import styled from "styled-components";
import { ProdutoConsumer } from "../../context";
import _ from "lodash";
import { buscarProdutos } from "./request";

export default class ProdutoList extends Component {

  render() {
    var VENDEDORES = require('./vendedores.json');
    return (
      <React.Fragment>
        <ProdutoWrapper className="py-5">
          <div className="container">
            <div className="row">
              <ProdutoConsumer>
                {value => {
                  console.log(value)
                  return value.produtos.map(produto => {
                    return <Produto key={produto.idproduto} produto={produto} vendedor={produto.Pessoa} />;
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
