import React from "react";

export default function Default(props) {
  console.log(props);

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h1 className="display-3">404</h1>
          <h1>error</h1>
          <h2>Página não encontrada</h2>
          <h3>
            A URL solicitada{" "}
            <span className="text-danger">"{props.location.pathname}"</span>
            não existe
          </h3>
        </div>
      </div>
    </div>
  );
}
