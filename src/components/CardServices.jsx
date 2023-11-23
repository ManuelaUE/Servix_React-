/* eslint-disable react/style-prop-object */
import React from "react";

export default function CardServices ({ title, image, link }){
    return(
      <a href={link}>
      <div class="card mt-3" style="width: 12rem;">
          <img src={image} class="card-img-top" alt="..."></img>
          <div class="card-img-overlay">
              <div class="d-flex align-content-center align-items-center justify-content-center">
                  <h5 class="card-title mt-5 btn btn-info text-light">{title}</h5>
              </div>
          </div>
      </div>
  </a>
    );
}