import React, { Component } from "react";

import HomeVendedor from './components/HomeVendedor/HomeVendedor';
import HomeUsuario from './components/HomeUsuario/HomeUsuario';

export default class Home extends Component {

    state = {
        artesao: localStorage.getItem('artesao')
    }

    render() {

        if (this.state.artesao === "true") {
            return <HomeVendedor />
        } else {
            return <HomeUsuario />
        }
    }
}
