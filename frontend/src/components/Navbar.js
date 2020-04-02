import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
export default class Navbar extends Component {

  handleLogount = () => {
    localStorage.clear();
  }

  render() {
    return (
      <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        <Link to="/">
          <img src="img/logo.jpg" alt="store" height="80px" width="80px" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Produtos
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/home" className="nav-link">
              Meu perfil
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav align-items-right">
          <li className="nav-item ml-5">
            <Link to="/login" onClick={this.handleLogount} className="nav-link">
              Logout
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
            Meu carrinho
          </ButtonContainer>
        </Link>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;
