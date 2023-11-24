import React from "react";

export default function ContainerRegister({ image, title, children }) {
  return (
    <div className="container">
      <section className="min-vh-100">
        <div className="bg-white">
          <div className="card-body p-5 text-center">
            <div className="mb-md-5 mt-md-4 pb-5"></div>
            <div className="logo">
              <img src={image} className="rounded mx-auto d-block" alt="" />
              <h2 className="fw-bold mb-2 text-uppercase mt-3">{title}</h2>
            {children}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
