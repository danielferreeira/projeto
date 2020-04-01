import React, { Component } from "react";
import Produto from "./Produto";
import styled from "styled-components";
import { buscarProdutosVendedor } from "./requests";
import InputSearch from "../../../SearchField";
import Grid from "@material-ui/core/Grid";

export default class ProdutoListar extends Component {

  state = {
    produtos: [],
    filter: ''
  }

  async componentDidMount() {
    await this.buscarProdutos()
  }

  async buscarProdutos() {
    const produtos = await buscarProdutosVendedor();

    this.setState({ produtos })
  }

  handleInputChange = e => {
    this.setState({ filter: e.target.value })
  }

  render() {
    return (
      <div style={{ width: '100%', margin: '15px' }}>
        <InputSearch handleInputChange={this.handleInputChange} />
        <div style={{ width: '100%' }}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            {
              this.state.produtos.filter(produtoFiltrado => {
                if (String(produtoFiltrado.descricao).includes(this.state.filter) || String(produtoFiltrado.nome).includes(this.state.filter)) {
                  return produtoFiltrado;
                } else {
                  return null;
                }
              }).map(produto => <Produto key={produto.idproduto} produto={produto} />)
            }
          </Grid>
        </div>
      </div>
    );
  }
}
