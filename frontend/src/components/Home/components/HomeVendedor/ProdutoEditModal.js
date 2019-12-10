import React, { Component } from "react";
import { Dialog, Button, TextField, Paper } from '@material-ui/core';
import { editarProduto } from "./requests";

export default class ProdutoEditModal extends Component {

    state = {
        nome: '',
        descricao: '',
        valor: 0,
        imagem: '',
        idpessoa: '',
        idproduto: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    fileSelectedHandler = event => {
        console.log(event);
    }

    editarProduto = async () => {
        const produto = await editarProduto({
            ...this.state,
            idpessoa: this.props.produto.idpessoa,
            idproduto: this.props.produto.idproduto
        });

        if (produto) {
            this.props.handleClose();
        }
    }

    limparFormulario = () => {
        this.setState({ nome: '', descricao: '', valor: 0, imagem: '' })
    }

    render() {

        const { produto, open, handleClose } = this.props;

        return (
            <React.Fragment>
                {produto !== null &&
                    <Dialog
                        open={open}
                        maxWidth="xl"
                        onClose={() => handleClose()}
                    >
                        <Paper
                            style={{ padding: '25px' }}
                            elevation={2}
                        >
                            <TextField
                                className="mb-3"
                                variant="outlined"
                                id="nome"
                                label="Produto"
                                name="nome"
                                fullWidth
                                value={this.state.nome}
                                onChange={this.handleChange}
                            />

                            <TextField
                                className="mb-3"
                                variant="outlined"
                                id="descricao"
                                label="Descrição"
                                name="descricao"
                                fullWidth
                                value={this.state.descricao}
                                onChange={this.handleChange}
                            />

                            <div className="flex">
                                <TextField
                                    className="flex mb-3 mr-1"
                                    variant="outlined"
                                    id="valor"
                                    label="Preço"
                                    type="number"
                                    name="valor"
                                    fullWidth
                                    style={{ width: "50%" }}
                                    value={this.state.valor}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="App">
                                <input type="file" className="flex mb-3 mr-1" onChange={this.fileSelectedHandler} />
                            </div>
                            <Button
                                variant="contained"
                                className="buttonHomeVendedor justify-center"
                                color="inherit"
                                size="large"
                                onClick={() => this.editarProduto()}
                            >
                                Editar produto
                                </Button>
                        </Paper>
                    </Dialog>
                }
            </React.Fragment>
        );
    }
}