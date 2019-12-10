import React, { Component } from "react";
import Produto from "./Produto";
import styled from "styled-components";
import { ProdutoConsumer } from "../../context";
import _ from "lodash";

export default class ProdutoList extends Component {

  render() {
    return (
      <React.Fragment>
        <ProdutoWrapper className="py-5">
          <div className="container">
            <div className="row">
              <ProdutoConsumer>
                {value => {
                  return value.produtos.map(produto => {
                    return <Produto other={value} key={produto.idproduto} produto={produto} vendedor={produto.Pessoa} />;
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
