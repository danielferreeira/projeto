import React, { Component } from "react";
import "./Register.css";
import { Grid, Switch, TextField, Button, Paper, Typography } from '@material-ui/core';
import { criarConta } from './request';

export default class Register extends Component {

  state = {
    nome: '',
    documento: '',
    contato: '',
    endereco: '',
    email: '',
    senha: '',
    artesao: false,
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSwitch = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  }

  savePessoa = async () => {
    const pessoa = await criarConta(this.state);

    if (pessoa.error) {
      this.setState({ error: pessoa.error })
    } else {
      this.props.history.push('/login')
    }
  }

  getPessoa = async () => {

  }

  async componentDidMount() {
    await this.getPessoa();
  }

  render() {
    return (
      <React.Fragment>
        <Paper
          className="paper"
          elevation={2}
        >
          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>
                <Switch
                  name="artesao"
                  checked={this.state.artesao}
                  onChange={this.handleSwitch}
                  value={this.state.artesao}
                />
              </Grid>
              <Grid item>Você é um artesão?</Grid>
            </Grid>
          </Typography>
          <TextField
            className="mb-3"
            variant="outlined"
            id="nome"
            label="Nome completo"
            name="nome"
            fullWidth
            value={this.state.nome}
            onChange={this.handleChange}
          />

          <TextField
            className="mb-3"
            variant="outlined"
            id="documento"
            type="number"
            label="CPF/CNPJ"
            name="documento"
            fullWidth
            value={this.state.documento}
            onChange={this.handleChange}
          />

          <div className="flex">
            <TextField
              className="flex mb-3 mr-1"
              variant="outlined"
              id="email"
              type="email"
              label="Email"
              name="email"
              style={{ width: "49%" }}
              value={this.state.email}
              onChange={this.handleChange}
            />
            <TextField
              className="flex mb-3"
              variant="outlined"
              id="senha"
              label="Senha"
              name="senha"
              type="password"
              style={{ width: "50%" }}
              value={this.state.senha}
              onChange={this.handleChange}
            />
          </div>

          <TextField
            className="mb-3"
            variant="outlined"
            id="contato"
            label="Contato"
            name="contato"
            fullWidth
            value={this.state.contato}
            onChange={this.handleChange}
          />

          <TextField
            className="mb-3"
            variant="outlined"
            id="endereco"
            label="Endereço"
            name="endereco"
            fullWidth
            value={this.state.endereco}
            onChange={this.handleChange}
          />

          <Button
            variant="contained"
            className="buttonRegister justify-center"
            color="inherit"
            size="large"
            onClick={() => {
              this.savePessoa();
            }}
          >
            Criar conta
          </Button>
        </Paper>

      </React.Fragment>
    );
  }
}
