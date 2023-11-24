/* eslint-disable react/style-prop-object */
import React from "react";

export default function ContainerSubCategoria({  title, children }) {
  return (
    <div className="container mb-3">
      <div className="row d-flex flex-row justify-content-center align-items-center">
        <div className="d-flex flex-wrap justify-content-start align-items-center">
          <div
            className="d-flex flex-wrap justify-content-center align-items-center"
            style="width: 20%; font-size: 4vh;"
            onclick=" window.history.back()">
            <i className="fa-solid fa-angle-left"></i>
          </div>
          <h3 className="ali">{title}</h3>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center">
            {children}
        </div>
      </div>
    </div>
  );
}
