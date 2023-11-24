import React from "react";

export default function ContainerHome ({children}) {
  return (
    <div className="container mb-3 pb-5">
      <div className="row d-flex flex-row justify-content-center align-items-center">
        <div className="col d-flex flex-column justify-content-center align-items-center">
            {children}
        </div>
      </div>
    </div>
  );
}
