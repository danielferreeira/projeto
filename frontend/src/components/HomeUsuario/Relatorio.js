import React, { Component } from "react";
import "./HomeUsuario.css";
import { Button, Paper } from '@material-ui/core';
import _ from 'lodash';

export default class HomeUsuario extends Component {

  state = {
    relatorio: 'Relatório de compras',
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
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
            className="buttonHomeUsuario mt-8 justify-center"
            color="inherit"
            size="large"
          >
            Relatório de compras
        </Button>
        </Paper>
      </React.Fragment>
    );
  }
}
