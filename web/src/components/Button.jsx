import React from "react";

import "../styles/button.css";

const Button = ({ click, opened }) => {
  return (
    <button className="button" onClick={() => click(opened)}>
      Cadastrar Imóvel
    </button>
  );
};

export default Button;
