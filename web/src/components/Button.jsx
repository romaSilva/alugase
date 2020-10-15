import React from "react";

import "../styles/button.css";

const Button = ({ click, opened, title }) => {
  return (
    <button
      className="button"
      onClick={() => (opened ? click(opened) : click())}
    >
      {title}
    </button>
  );
};

export default Button;
