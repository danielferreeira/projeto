import React, { Component } from "react";
import "./Register.css";
import {Grid, Switch, TextField, Button, Paper, Typography} from '@material-ui/core';
import axios from 'axios';

export default class Register extends Component {

  state = {
    nome       : '',
    documento  : '',
    contato    : '',
    endereco   : '',
    login      : '',
    senha      : '',
    atribuicao : false,

  }
  handleChange = (event) => {
    this.setState({[event.target.name] : event.target.value});
  }

  handleSwitch = (event) => {
    this.setState({[event.target.name] : event.target.checked});
  }

  savePessoa = () => {
    axios.post('http://localhost:3000/savepessoa', this.state)
      .then(function(response){
        console.log('salvo com sucesso')
      }); 
  }

  getPessoa = async () => {
    const pessoas = await axios.get('http://localhost:3000/pessoas');
    this.setState({teste : pessoas})
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
              <Grid item>Usuário</Grid>
              <Grid item>
                <Switch
                  name="atribuicao"
                  checked={this.state.atribuicao}
                  onChange={this.handleSwitch}
                  value={this.state.atribuicao}
                />
              </Grid>
              <Grid item>Artesão</Grid>
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
              id="login"
              label="Login"
              name="login"
              style={{width : "49%"}}
              value={this.state.login}
              onChange={this.handleChange}
            />
            <TextField
              className="flex mb-3"
              variant="outlined"
              id="senha"
              label="Senha"
              name="senha"
              type="password"
              style={{width : "50%"}}
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
