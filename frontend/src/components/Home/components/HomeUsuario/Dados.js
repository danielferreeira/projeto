import React, { Component } from "react";
import "./HomeUsuario.css";
import { TextField, Button, Paper } from '@material-ui/core';
import { carregarInformacoesUsuarioLogado, atualizarDadosUsuario } from "./requests";
import { withSnackbar } from "notistack";

class HomeVendedor extends Component {

  state = {
    nome: '',
    documento: '',
    email: '',
  }

  async componentDidMount() {
    const usuario = await carregarInformacoesUsuarioLogado();

    if (usuario) {
      const { idpessoa, nome, documento, email } = usuario;
      this.setState({ idpessoa, nome, documento, email })
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  atualizar = () => {
    atualizarDadosUsuario(this.state);
    this.props.enqueueSnackbar('Perfil atualizado com sucesso.', { variant: 'success' })
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
            label="Nome"
            name="nome"
            fullWidth
            value={this.state.nome}
            onChange={this.handleChange}
          />
          <div className="flex">
            <TextField
              className="mb-3 mr-4"
              variant="outlined"
              id="documento"
              label="Documento"
              name="documento"
              fullWidth
              style={{ width: "20%" }}
              value={this.state.documento}
              onChange={this.handleChange}
            />

            <TextField
              className="flex mb-3"
              variant="outlined"
              id="email"
              label="Email"
              name="email"
              fullWidth
              style={{ width: "75%" }}
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <Button
            variant="contained"
            className="buttonHomeVendedor justify-center"
            color="inherit"
            size="large"
            onClick={() => {
              this.atualizar();
            }}
          >
            Salvar
        </Button>
        </Paper>
      </React.Fragment>
    );
  }
}

export default withSnackbar(HomeVendedor);