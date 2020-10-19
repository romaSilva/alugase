import React, { useContext } from "react";
import { Link } from "react-router-dom";
import globalContext from "../store/globalContext";

import "../styles/components/card.css";

const Card = ({ realty }) => {
  const { handleCardClick } = useContext(globalContext);

  return (
    <Link style={{ textDecoration: "none" }} to={`/update-form/${realty.id}`}>
      <div className="card-container" onClick={() => handleCardClick(realty)}>
        <div className="card-image-container">
          <img src={realty.image ? realty.image : ""} alt="" />
        </div>
        <div className="card-info-container">
          <span>CEP: {realty.cep}</span>
          <span>{realty.address}</span>
          <span>
            {realty.city} - {realty.state}
          </span>
          <span className="card-value">R$ {realty.value}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
