import React from "react";

export default function ContainerServicios({title, children}) {
  return (
    <div className="container mb-3">
      <div className="row d-flex flex-row justify-content-center align-items-center">
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <h1 className="ali">{title}</h1>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center">
            {children}
        </div>
      </div>
    </div>
  );
}
