import React, { Component } from "react";

const Button = ({ value, name, classN, onClick }) => {
  return (
    <input
      className={classN}
      type="button"
      value={value}
      name={name}
      onClick={onClick}
    />
  );
};

export default Button;
