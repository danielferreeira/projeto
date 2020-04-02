import React, { Component } from "react";
import Produto from "./Produto";
import styled from "styled-components";
import { ProdutoConsumer } from "../../context";
import InputSearch from "../SearchField";

export default class ProdutoList extends Component {

  state = {
    filter: ''
  }

  handleInputChange = e => {
    this.setState({ filter: e.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <ProdutoWrapper className="py-5">
          <div className="container">
            <InputSearch handleInputChange={this.handleInputChange} />
            <div className="row">
              <ProdutoConsumer>
                {value => {
                  const produtosFiltrados = value.produtos.filter(produtoFiltrado => {
                    if (String(produtoFiltrado.descricao).includes(this.state.filter) || String(produtoFiltrado.nome).includes(this.state.filter)) {
                      return produtoFiltrado;
                    } else {
                      return null;
                    }
                  })
                  return produtosFiltrados.map(produto => <Produto other={value} key={produto.idproduto} produto={produto} vendedor={produto.Pessoa} />);
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
