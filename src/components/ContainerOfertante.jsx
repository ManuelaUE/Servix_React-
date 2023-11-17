/* eslint-disable react/style-prop-object */
import React from "react";

export default function ContainerOfertante({ text, children }) {
  return (
    <div class="form-group mb-3">
      <label class="col-sm-2 control-label">{text}</label>
      <div class="col-sm-4"></div>
      {children}
      
    </div>
  );
}
