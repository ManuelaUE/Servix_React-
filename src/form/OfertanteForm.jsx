/* eslint-disable react/style-prop-object */
import React from "react";

export default function OfertanteForm({ children, save }) {
  return (
    <div class="card mt-3" style="display: none;" id="informationOffer">
      <div class="card-body col d-flex flex-column justify-content-center align-items-center">
        <div class="form-horizontal mt-4">
          {children}
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button class="btn btn-primary">{save}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
