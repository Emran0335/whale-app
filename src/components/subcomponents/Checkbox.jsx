import React from "react";
import "../../style/layout.css";

const Checkbox = ({className, text, ...rest}) => {
  return (
    <label htmlFor="#" className={className}>
      <input type="checkbox"{...rest} />
      <span className="checkboxText">{text}</span>
    </label>
  );
};

export default Checkbox;
