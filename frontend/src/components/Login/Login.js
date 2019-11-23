import React, { Component } from "react";
import "./Login.css";
import {Dialog, DialogContent, TextField, Button, Paper} from '@material-ui/core';

export default class Login extends Component {

  state = {
    login : '',
    senha : '',

  }

  handleChange = (event) => {
    this.setState({[event.target.name] : event.target.value});
  }

  render() {
    return (
      <React.Fragment>
        <Dialog
          open={true}  
          fullScreen 
        >
          <DialogContent
            className="dialog"
          >
            <Paper
              className="paper"
              elevation={2}
            >
              <img src="img/logo.jpg"
                   alt="logo"
                   style={{
                      width : '100%', 
                      heigth : '30%', 
                    }}
              />
              <TextField
                className="mb-3"
                variant="outlined"
                id="login"
                label="Login"
                name="login"
                fullWidth
                value={this.state.login}
                onChange={this.handleChange}
              />
              <TextField
                className="mb-3"
                variant="outlined"
                id="senha"
                label="Senha"
                name="senha"
                type="password"
                fullWidth
                value={this.state.senha}
                onChange={this.handleChange}
              />
              <Button 
                variant="contained"
                className="buttonLogin ml-sm-3 mr-sm-2"
                color="inherit"
                size="large"
                //onClick={() => this.validarLogin()}
                href="/home"
                >
                  Login
              </Button>
              Não possui conta? <a className="registrar" href="/register">Registre-se</a>
            </Paper>
          </DialogContent>
        </Dialog>
        
      </React.Fragment>
    );
  }
}
