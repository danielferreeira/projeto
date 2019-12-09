import React, { Component } from "react";
import "./HomeVendedor.css";
import {TextField, Button, Paper, MenuItem, MenuList, Typography, ListItemIcon } from '@material-ui/core';
import _ from 'lodash';
import UploadIcon from '@material-ui/icons/CloudUpload';
import EditIcon from '@material-ui/icons/Edit';

export default class HomeVendedor extends Component {

  state = {
    razaosocial       : 'Mimos da Ju',
    cnpj              : '01.159.789/0001-01',
    telefone          : '(49)988599908',

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
            id="razaosocial"
            label="Razão social"
            name="razaosocial"
            fullWidth
            value={this.state.razaosocial}
            onChange={this.handleChange}
        />
    
        <TextField
            className="mb-3"
            variant="outlined"
            id="cnpj"
            label="CNPJ"
            name="cnpj"
            fullWidth
            value={this.state.cnpj}
            onChange={this.handleChange}
        />
    
        <div className="flex">
            <TextField
            className="flex mb-3 mr-1"
            variant="outlined"
            id="telefone"
            label="Telefone"
            name="telefone"
            fullWidth
            style={{width : "50%"}}
            value={this.state.telefone}
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
