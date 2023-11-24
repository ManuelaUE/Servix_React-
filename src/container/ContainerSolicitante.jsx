import React from "react";

export default function ContainerProfileSolicitante({ title, children }) {
  return (
    <div className="container">
      <div className=".col-xs-4 .col-md-offset-2">
        <div className="panel panel-default panel-info Profile">
          <div className="d-flex flex-wrap justify-content-start align-items-center">
            <div
              className="d-flex flex-wrap justify-content-center align-items-center"
              style={{"width": "20%", "fontSize": "4vh"}}
              onclick=" window.history.back()"
            >
              <i className="fa-solid fa-angle-left"></i>
            </div>
            <h3 className="ali">{title}</h3>
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <div className="panel-body d-flex flex-column justify-content-center align-items-center mt-3">
              <div className="card">
                <div className="card-body col d-flex flex-column justify-content-center align-items-center">
                  <div className="img rounded-circle">
                    <img
                      src="https://gravatar.com/avatar/31b64e4876d603ce78e04102c67d6144?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png"
                      className="img-responsive"
                      alt=""
                    ></img>
                  </div>
                  <div className="form-horizontal mt-4">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
