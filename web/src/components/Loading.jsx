import React from "react";

import Loader from "../static/loading.gif";

import "../styles/components/loading.css";

const Loading = () => {
  return (
    <div className="loader-container">
      <img src={Loader} alt="loading..." />;
    </div>
  );
};

export default Loading;
