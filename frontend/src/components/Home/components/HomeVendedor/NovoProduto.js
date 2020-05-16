import React, { Component } from "react";
import { TextField, Button, Paper, Grid } from '@material-ui/core';
import { salvarProduto } from './requests';
import { withSnackbar } from 'notistack';
import { mountDataImage } from "../../../../commom/functions";

class HomeVendedor extends Component {

  state = {
    nome: '',
    descricao: '',
    valor: 0,
    frete: 0,
    imagem: '',
    idpessoa: localStorage.getItem('idpessoa')
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
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

  criarProduto = async () => {
    const produto = await salvarProduto(this.state);

    if (produto) {
      this.props.enqueueSnackbar('Produto criado com sucesso.', { variant: 'success' })
      this.limparFormulario();
    }
  }

  limparFormulario = () => {
    this.setState({ nome: '', descricao: '', valor: 0, imagem: '', frete: '' })
  }

  render() {
    return (
      <React.Fragment>
        <Paper
          className="paperhomevendedor"
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
          <Grid container>
            <Grid item xs={6}>
              <TextField
                className="flex mb-12 mr-1"
                variant="outlined"
                id="valor"
                label="Preço"
                type="number"
                name="valor"
                fullWidth
                value={this.state.valor}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                id="frete"
                label="Frete"
                type="number"
                name="frete"
                fullWidth
                value={this.state.frete}
                onChange={this.handleChange}
              />
            </Grid>
          </Grid>

          <div className="App">
            <img alt="" src={this.state.imagem || "https://www.lucastavares.net/wp/wp-content/themes/ctheme/assets/img/img-default.jpg"} width='100px' height="100px" />
            <input type="file" className="flex mb-3 mr-1" onChange={this.fileSelectedHandler} />
          </div>

          <Button
            variant="contained"
            className="buttonHomeVendedor justify-center"
            color="inherit"
            size="large"
            onClick={() => this.criarProduto()}
          >
            Criar produto
        </Button>
        </Paper>
      </React.Fragment>
    );
  }
}

export default withSnackbar(HomeVendedor);