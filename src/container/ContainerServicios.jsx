import React from "react";

export default function ContainerServicios({title, children}) {
  return (
    <div class="container mb-3">
      <div class="row d-flex flex-row justify-content-center align-items-center">
        <div class="d-flex flex-wrap justify-content-center align-items-center">
          <h1 class="ali">{title}</h1>
        </div>
        <div class="col d-flex flex-column justify-content-center align-items-center">
            {children}
        </div>
      </div>
    </div>
  );
}
