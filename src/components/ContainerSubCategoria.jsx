/* eslint-disable react/style-prop-object */
import React from "react";

export default function ContainerSubCategoria({  title, children }) {
  return (
    <div class="container mb-3">
      <div class="row d-flex flex-row justify-content-center align-items-center">
        <div class="d-flex flex-wrap justify-content-start align-items-center">
          <div
            class="d-flex flex-wrap justify-content-center align-items-center"
            style="width: 20%; font-size: 4vh;"
            onclick=" window.history.back()">
            <i class="fa-solid fa-angle-left"></i>
          </div>
          <h3 class="ali">{title}</h3>
        </div>
        <div class="col d-flex flex-column justify-content-center align-items-center">
            {children}
        </div>
      </div>
    </div>
  );
}
