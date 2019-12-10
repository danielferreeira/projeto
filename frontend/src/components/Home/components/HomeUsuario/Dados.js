import React, { Component } from "react";
import "./HomeUsuario.css";
import {TextField, Button, Paper } from '@material-ui/core';

export default class HomeVendedor extends Component {

  state = {
    nome            : '',
    documento       : '',
    email           : '',
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
                style={{width : "20%"}}
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
                style={{width : "75%"}}
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
            this.saveProduto();
            }}
        >
            Salvar
        </Button>
        </Paper>
      </React.Fragment>
    );
  }
}
