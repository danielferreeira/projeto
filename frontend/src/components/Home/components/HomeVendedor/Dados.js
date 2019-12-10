import React, { Component } from "react";
import "./HomeVendedor.css";
import { TextField, Button, Paper } from '@material-ui/core';
import _ from 'lodash';
import { atualizarDadosUsuario, carregarInformacoesUsuarioLogado } from "./requests";

export default class HomeVendedor extends Component {

  state = {
    idpessoa: '',
    nome: '',
    cpfcnpj: '',
    email: '',
  }

  async componentDidMount() {
    const usuario = await carregarInformacoesUsuarioLogado();

    if (usuario) {
      const { idpessoa, nome, cpfcnpj, email } = usuario;
      this.setState({ idpessoa, nome, cpfcnpj, email })
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  fileSelectedHandler = event => {
    console.log(event);
  }

  salvar = () => {
    atualizarDadosUsuario(this.state);
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
            label="Razão social"
            name="nome"
            fullWidth
            value={this.state.nome}
            onChange={this.handleChange}
          />

          <TextField
            className="mb-3"
            variant="outlined"
            id="cpfcnpj"
            label="CNPJ"
            name="cpfcnpj"
            fullWidth
            value={this.state.cpfcnpj}
            onChange={this.handleChange}
          />

          <div className="flex">
            <TextField
              className="flex mb-3 mr-1"
              variant="outlined"
              disabled
              id="email"
              label="Contato"
              name="email"
              fullWidth
              style={{ width: "50%" }}
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
              this.salvar();
            }}
          >
            Salvar
        </Button>
        </Paper>
      </React.Fragment>
    );
  }
}
