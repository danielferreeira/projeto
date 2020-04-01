import React, { Component } from "react";
import { ButtonContainer } from "../../../Button";
import { Dialog } from '@material-ui/core';
import ProdutoEditModal from "./ProdutoEditModal";
import { withRouter } from 'react-router-dom';

class ProdutoDetalhes extends Component {

    state = {
        modalOpen: false,
        produto: null
    }

    handleEditProduct = (produto) => {
        this.setState({ modalOpen: !this.state.modalOpen, produto })
    }
    render() {
        console.log(this.props)
        const { produto, open, handleDetail, vendedorNome } = this.props;
        return (
            <React.Fragment>
                <ProdutoEditModal
                    produto={this.state.produto}
                    handleClose={() => {
                        this.handleEditProduct()
                        handleDetail();
                        this.props.history.push('/')
                        this.props.history.push('/home')
                    }}
                    open={this.state.modalOpen}
                />
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
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        Feito por : <span className="text-uppercase">{vendedorNome}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            Preço : <span>R$</span>
                                            {produto.valor}
                                        </strong>
                                    </h4>
                                    <p className="font-weight-bold mt-3 mb-0">
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
                                            onClick={() => this.handleEditProduct(produto)}
                                        >
                                            Editar produto
                                        </ButtonContainer>
                                        {/* <ButtonContainer
                                            cart
                                            disabled={produto.inCart ? true : false}
                                            onClick={() => {
                                                //value.addToCart(id);
                                                //value.openModal(id);
                                            }}
                                        >
                                            {produto.inCart ? "No carrinho" : "Adicionar ao carrinho"}
                                        </ButtonContainer> */}
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

export default withRouter(ProdutoDetalhes);
