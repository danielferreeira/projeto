import React, { Component } from "react";
import "./HomeUsuario.css";
import Dados from './Dados';
import Relatorio from './Relatorio';
import { Paper, MenuItem, MenuList, Typography, ListItemIcon } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Assignment from '@material-ui/icons/Assignment';

export default class HomeUsuario extends Component {

  state = {
    content: "Cadastrar produto",
  }

  handlesidebar = (event) => {
    this.setState({ "content": event.target.textContent });
  }

  render() {

    var component = '';
    switch (this.state.content) {
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
