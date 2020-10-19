import React from "react";

import "../styles/components/card.css";

const Card = ({ realty }) => {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img src={realty.image ? realty.image : ""} alt="" />
      </div>
      <div className="card-info-container">
        <span>CEP: {realty.cep}</span>
        <span>
          {realty.city} - {realty.state}
        </span>
        <span className="card-value">R$ {realty.value}</span>
      </div>
    </div>
  );
};

export default Card;
