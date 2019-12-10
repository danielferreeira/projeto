import React, { Component } from "react";
import "./HomeVendedor.css";
import ProdutoListar from './ProdutoListar';
import NovoProduto from './NovoProduto';
import Dados from './Dados';
import Relatorio from './Relatorio';
import { Paper, MenuItem, MenuList, Typography, ListItemIcon } from '@material-ui/core';
import UploadIcon from '@material-ui/icons/CloudUpload';
import EditIcon from '@material-ui/icons/Edit';
import Ballot from '@material-ui/icons/Ballot';
import Assignment from '@material-ui/icons/Assignment';

export default class HomeVendedor extends Component {

  state = {
    content: "Cadastrar produto",
  }

  handlesidebar = (event) => {
    this.setState({ "content": event.target.textContent });
  }

  render() {

    var component = '';

    switch (this.state.content) {
      case "Lista de produtos":
        component = <ProdutoListar />
        break;
      case "Cadastrar produto":
        component = <NovoProduto />
        break;
      case "Editar perfil":
        component = <Dados />
        break;
      case "Relatórios":
        component = <Relatorio />
        break;

      default:
        component = <div></div>
        break;
    }


    return (
      <React.Fragment>
        <div className="div">
          <Paper
            className="left-sidebar"
            elevation={2}
          >
            <MenuList>
              <MenuItem
                onClick={this.handlesidebar}
              >
                <ListItemIcon>
                  <Ballot fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Lista de produtos</Typography>
              </MenuItem>
              <MenuItem
                onClick={this.handlesidebar}
              >
                <ListItemIcon>
                  <UploadIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Cadastrar produto</Typography>
              </MenuItem>
              <MenuItem
                onClick={this.handlesidebar}
              >
                <ListItemIcon>
                  <EditIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Editar perfil</Typography>
              </MenuItem>
              <MenuItem
                onClick={this.handlesidebar}
              >
                <ListItemIcon>
                  <Assignment fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Relatórios</Typography>
              </MenuItem>
            </MenuList>
          </Paper>
          {component}
        </div>
      </React.Fragment>
    );
  }
}
