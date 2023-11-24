/* eslint-disable react/style-prop-object */
import React from "react";

export default function CardSubcategoria({ title, image, id }) {
  return (
    <div id={id} style="display: none;">
      <div
        className="card mt-3"
        style="width: 12rem;"
        onclick="mostrarVendedores()">
        <img
          src={image}
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-img-overlay">
          <div className="d-flex align-content-center align-items-center justify-content-center">
            <h5 className="card-title mt-5 btn btn-info text-light">{title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
