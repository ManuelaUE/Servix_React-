import React from "react";
import { Link } from "react-router-dom";

export default function Card({ image, text, titleLink, title, link }) {
  return (
    <div className="card mt-3">
      <img src={image} className="card-img-top" alt="..." />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
            {text}
        </p>
        <Link to={link} className="btn btn-primary">
          {titleLink}
        </Link>
      </div>
    </div>
  );
}
