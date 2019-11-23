import React, { Component } from "react";
import "./HomeVendedor.css";
import {TextField, Button, Paper} from '@material-ui/core';
import _ from 'lodash';
import axios from 'axios';

export default class HomeVendedor extends Component {

  state = {
    nome       : '',
    descricao  : '',
    preco      : '',
    imagem     : '',


  }
  handleChange = (event) => {
    this.setState({[event.target.name] : event.target.value});
  }

  fileSelectedHandler = event => {
    console.log(event);
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

          <div className="flex">
            <TextField
              className="flex mb-3 mr-1"
              variant="outlined"
              id="preco"
              label="Preço"
              name="preco"
              fullWidth
              style={{width : "50%"}}
              value={this.state.preco}
              onChange={this.handleChange}
            />
          </div>

          <div className="App">
            <input type="file" className="flex mb-3 mr-1" onChange={this.fileSelectedHandler}/>
          </div>

          <Button 
            variant="contained"
            className="buttonHomeVendedor justify-center"
            color="inherit"
            size="large"
            onClick={() => {
              this.saveProduto();
            }}
          >
              Criar produto
          </Button>
        </Paper>
      </React.Fragment>
    );
  }
}
