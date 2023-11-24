/* eslint-disable react/style-prop-object */
import React from "react";

export default function ContainerOfertante({ text, children }) {
  return (
    <div className="form-group mb-3">
      <label className="col-sm-2 control-label">{text}</label>
      <div className="col-sm-4"></div>
      {children}
      
    </div>
  );
}
