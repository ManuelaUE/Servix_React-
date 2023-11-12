import React from "react";

export default function ContainerLonig({image, title}) {
  return (
    <div className="container">
      <section className="vh-100">
        <div className="bg-white">
          <div className="card-body p-5 text-center">
            <div className="mb-md-5 mt-md-4 pb-5">
              <div className="logo">
                <img src={image} alt="" className="rounded mx-auto d-block" />
              </div>
              <h3 className="fw-bold mb-2 text-uppercase mt-5">{title}</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
