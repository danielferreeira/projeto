import React, { Component } from "react";
import styled from "styled-components";
import { ProdutoConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
export default class Modal extends Component {
  render() {
    return (
      <ProdutoConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, nome, valor, frete } = value && value.modalProduto;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                      id="modal"
                    >
                      <h5>Item adicionado ao carrinho</h5>
                      <img src={img || null} className="img-fluid" alt="" />
                      <h5>{nome}</h5>
                      <h5 className="text-muted">Preço : R${valor}</h5>
                      <div className="text-muted">Frete : R${frete}</div>
                      <Link to="/">
                        <ButtonContainer
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Continuar comprando
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer
                          cart
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Ir para o carrinho
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProdutoConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
