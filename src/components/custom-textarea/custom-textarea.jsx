import React from "react";

import "../authorization/authorization.css";
import "../custom-input/custom-input.css";
import "./custom-textarea.css";

export const CustomTextArea = React.forwardRef((props, ref) => (
  <div className="custom-item">
    <label htmlFor={props.name} className="custom-label">
      {props.title}
      <textarea
        ref={ref}
        {...props}
        className="custom-textarea custom-input"
      ></textarea>
    </label>
  </div>
));
