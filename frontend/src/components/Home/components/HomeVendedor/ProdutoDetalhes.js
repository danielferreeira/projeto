import React, { Component } from "react";
import { ProdutoConsumer } from "../../../../context";
import { ButtonContainer } from "../../../Button";
import { Link } from "react-router-dom";
import {Dialog} from '@material-ui/core';

export default class ProdutoDetalhes extends Component {
  render() {
    const {produto, open, handleDetail, vendedor} = this.props;
    return (    
        <React.Fragment>
            {produto !== null &&
                <Dialog
                    open={open}  
                    maxWidth="xl" 
                    onClose={() => handleDetail(null)}
                >
                    <div className="container py-5">
                        {/* title */}
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-3">
                                <h1>{produto.nome}</h1>
                            </div>
                        </div>
                        {/* end of title */}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <img src={produto.imgURL} className="img-fluid" alt="" />
                            </div>
                            {/* prdoduct info */}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    Feito por : <span className="text-uppercase">{vendedor.razaosocial}</span>
                                </h4>
                                <h4 className="text-blue">
                                    <strong>
                                        Preço : <span>R$</span>
                                        {produto.valor}
                                    </strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                    Informações sobre o produto :
                                </p>
                                <p className="text-muted lead">{produto.descricao}</p>
                                {/* buttons */}
                                <div>
                                        <ButtonContainer
                                            onClick={() => handleDetail(null)}
                                        >
                                            Voltar para os produtos
                                        </ButtonContainer>
                                    <ButtonContainer
                                        cart
                                        disabled={produto.inCart ? true : false}
                                        onClick={() => {
                                        //value.addToCart(id);
                                        //value.openModal(id);
                                        }}
                                    >
                                        {produto.inCart ? "No carrinho" : "Adicionar ao carrinho"}
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog>
            }
        </React.Fragment>
    );
  }
}

