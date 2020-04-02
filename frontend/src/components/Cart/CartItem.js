import React, { Component } from "react";
export default class CartItem extends Component {
  render() {
    const {item} = this.props;
    const { increment, decrement, removeItem } = this.props.value;

    return (
      <div className="row my-1 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={item.imagem || "https://www.lucastavares.net/wp/wp-content/themes/ctheme/assets/img/img-default.jpg"}
            style={{ width: "5rem", heigth: "5rem" }}
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <span className="d-lg-none">Produto :</span> {item.nome}
        </div>
        <div className="col-10 mx-auto col-lg-1 ">
          <strong>
            <span className="d-lg-none">Preço :</span> R${item.valor}
          </strong>
        </div>
        <div className="col-10 mx-auto col-lg-1 ">
          <strong>
            <span className="d-lg-none">Frete :</span> R${item.frete}
          </strong>
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
          <div className="d-flex justify-content-center">
            <div>
              <span
                className="btn btn-black mx-1"
                onClick={() => {
                  return decrement(item.idproduto);
                }}
              >
                -
              </span>
              <span className="btn btn-black mx-1">{item.count}</span>
              <span
                className="btn btn-black mx-1"
                onClick={() => {
                  return increment(item.idproduto);
                }}
              >
                +
              </span>
            </div>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <div className=" cart-icon" onClick={() => removeItem(item.idproduto)}>
            <i className="fas fa-trash" />
          </div>
        </div>

        <div className="col-10 mx-auto col-lg-2 ">
          <strong>Total : R${item.total} </strong>
        </div>
      </div>
    );
  }
}
