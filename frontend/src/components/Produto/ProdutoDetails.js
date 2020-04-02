import React, { Component } from "react";
import { ButtonContainer } from "../Button";
import { Dialog } from '@material-ui/core';

export default class ProdutoDetails extends Component {
    render() {
        const { produto, open, handleDetail, vendedor, other } = this.props;
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
                                    <img src={produto.imagem || "https://www.lucastavares.net/wp/wp-content/themes/ctheme/assets/img/img-default.jpg"} className="img-fluid" alt="" />
                                </div>
                                {/* prdoduct info */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h4 className="text-title">
                                        Feito por : <span>{vendedor.nome}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            Preço : <span>R$</span>{produto.valor}
                                        </strong>
                                    </h4>
                                    <div>
                                        <strong>
                                            Frete : <span>R$</span>{produto.frete}
                                        </strong>
                                    </div>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Informações sobre o produto :
                                </p>
                                    <p className="text-muted lead">{produto.descricao}</p>
                                    <div>
                                        <ButtonContainer
                                            onClick={() => handleDetail(null)}
                                        >
                                            Voltar para os produtos
                                        </ButtonContainer>
                                        <ButtonContainer
                                            cart={produto.inCart}
                                            disabled={produto.inCart ? true : false}
                                            onClick={() => {
                                                other.addToCart(produto.idproduto);
                                                other.openModal(produto.idproduto);
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

