import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import styled from "styled-components";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {


  render() {
    var PRODUTOS = require('./produtos.json');
    return (
      <React.Fragment>
        <ProductWrapper className="py-5">
          <div className="container">
            <div className="row">
              <ProductConsumer>
                {value => {
                  return /*value.products*/PRODUTOS.map(product => {
                    return <Product key={product.idproduto} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </ProductWrapper>
      </React.Fragment>
    );
  }
}

const ProductWrapper = styled.section``;
