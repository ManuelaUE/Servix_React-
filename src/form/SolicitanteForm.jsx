import React from "react";

export default function SolicitantteForm({ title, children, save, text }) {
  return (
    <form>
      <div className="form-group mb-3">
        <label className="col-sm-2 control-label">{title}</label>
        <div className="col-sm-4"></div>
        {children}

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="btn btn-primary">{save}</button>
            <div className="mt-5" id="makeMeOffer">
              <button className="btn btn-secondary" onclick="changeRol()">
                {text}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
