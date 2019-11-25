import React, { Component } from "react";
import "./HomeVendedor.css";
import {TextField, Button, Paper, MenuItem, MenuList, Typography, ListItemIcon } from '@material-ui/core';
import _ from 'lodash';
import UploadIcon from '@material-ui/icons/CloudUpload';
import EditIcon from '@material-ui/icons/Edit';

export default class HomeVendedor extends Component {

  state = {
    relatorio       : 'Relatório de vendas',
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
        <Button 
            variant="contained"
            className="buttonHomeVendedor justify-center"
            color="inherit"
            size="large"
        >
            Relatório de vendas
        </Button>
        </Paper>
      </React.Fragment>
    );
  }
}
