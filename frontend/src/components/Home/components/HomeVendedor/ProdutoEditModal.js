import React, { Component } from "react";
import { Dialog, Button, TextField, Paper } from '@material-ui/core';
import { editarProduto, buscarProduto } from "./requests";
import { mountDataImage } from "../../../../commom/functions";

export default class ProdutoEditModal extends Component {

    state = {
        nome: '',
        descricao: '',
        valor: 0,
        imagem: '',
        idpessoa: '',
        idproduto: ''
    }

    componentDidMount() {
        const idproduto = this.props.produto && this.props.produto.idproduto;

        buscarProduto(idproduto)
            .then(resp => {
                this.setState({ ...resp })
            })

    }

    fileSelectedHandler = event => {

        const file = event.target.files[0];
    
        var atualizarImagem = data => this.setState({ imagem: data });
    
        var reader = new FileReader();
        reader.readAsArrayBuffer(new Blob([event.target.files[0]]));
    
        reader.onload = function () {
          var arrayBuffer = reader.result
          var bytes = new Uint8Array(arrayBuffer);
    
          atualizarImagem(mountDataImage(file.type, bytes));
        }
    
      }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
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

                            <img src={this.state.imagem || "https://www.lucastavares.net/wp/wp-content/themes/ctheme/assets/img/img-default.jpg"} width='150px' />

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