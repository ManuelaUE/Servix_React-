import React from "react";

export default function SolicitantteForm({ title, children, save, text }) {
  return (
    <form>
      <div class="form-group mb-3">
        <label class="col-sm-2 control-label">{title}</label>
        <div class="col-sm-4"></div>
        {children}

        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button class="btn btn-primary">{save}</button>
            <div class="mt-5" id="makeMeOffer">
              <button class="btn btn-secondary" onclick="changeRol()">
                {text}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}