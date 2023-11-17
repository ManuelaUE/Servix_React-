import React from "react";

export default function ContainerProfileSolicitante({ title, children }) {
  return (
    <div class="container">
      <div class=".col-xs-4 .col-md-offset-2">
        <div class="panel panel-default panel-info Profile">
          <div class="d-flex flex-wrap justify-content-start align-items-center">
            <div
              class="d-flex flex-wrap justify-content-center align-items-center"
              style="width: 20%; font-size: 4vh;"
              onclick=" window.history.back()"
            >
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <h3 class="ali">{title}</h3>
          </div>
          <div class="col d-flex flex-column justify-content-center align-items-center">
            <div class="panel-body d-flex flex-column justify-content-center align-items-center mt-3">
              <div class="card">
                <div class="card-body col d-flex flex-column justify-content-center align-items-center">
                  <div class="img rounded-circle">
                    <img
                      src="https://gravatar.com/avatar/31b64e4876d603ce78e04102c67d6144?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png"
                      class="img-responsive"
                      alt=""
                    ></img>
                  </div>
                  <div class="form-horizontal mt-4">
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
