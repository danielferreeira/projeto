import React, { Component } from "react";
import Produto from "./Produto";
import styled from "styled-components";
import { ProdutoConsumer } from "../../context";
import _ from "lodash";

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
                  return value.produtos.map(produto => {
                    const vendedor = _.find(VENDEDORES, {idvendedor : produto.idvendedor});
                    return <Produto key={produto.idproduto} produto={produto} vendedor={vendedor}/>;
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
