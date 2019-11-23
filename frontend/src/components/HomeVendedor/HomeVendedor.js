import React, { Component } from "react";
import "./HomeVendedor.css";
import NovoProduto from './NovoProduto';
import {Paper, MenuItem, MenuList, Typography, ListItemIcon } from '@material-ui/core';
import UploadIcon from '@material-ui/icons/CloudUpload';
import EditIcon from '@material-ui/icons/Edit';

export default class HomeVendedor extends Component {

  state = {
    content    : "Carregar produto",
  }

  handlesidebar = (event) => {
    this.setState({"content" : event.target.textContent});
  }

  render() {
    
    var component = '';
    {switch (this.state.content) {
      case "Carregar produto":
          component = <NovoProduto/>
        break;
        case "Editar perfil":
          component = <Paper/>
        break;
    
      default:
          component = <div></div>
        break;
    }}

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
                  <UploadIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Carregar produto</Typography>
              </MenuItem>
              <MenuItem
                onClick={this.handlesidebar} 
              >
                <ListItemIcon>
                  <EditIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Editar perfil</Typography>
              </MenuItem>
            </MenuList>
          </Paper>
          {component}
        </div>
      </React.Fragment>
    );
  }
}
