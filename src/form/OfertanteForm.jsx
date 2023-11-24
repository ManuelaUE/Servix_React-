/* eslint-disable react/style-prop-object */
import React from "react";

export default function OfertanteForm({ children }) {
  return (
    <div className="card mt-3 mb-5" style={{"display": "none"}} id="informationOffer">
      <div className="card-body col d-flex flex-column justify-content-center align-items-center">
        <div className="form-horizontal mt-4">
          {children}
        </div>
      </div>
    </div>
  );
}
