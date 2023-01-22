import React from "react";

const Form = ({ children, className, ...rest }) => {
  return (
    <form
      action="#"
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        padding: "2rem auto",
        backgroundColor: "#e5e5e5",
      }}
      {...rest}
    >
      {children}
    </form>
  );
};

export default Form;
