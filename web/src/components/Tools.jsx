import React, { useContext } from "react";
import globalContext from "../store/globalContext";
import { Link } from "react-router-dom";

import "../styles/components/tools.css";

const Tools = () => {
  const { handleCitySearch, filter } = useContext(globalContext);

  const handleInputChange = (e) => {
    handleCitySearch(e.target.value);
  };

  return (
    <div className="tools">
      <Link to="/form" className="form-button">
        Cadastrar Imóvel
      </Link>
      <label htmlFor="city">Cidade:</label>
      <input
        type="text"
        name="city"
        id="city"
        placeholder="Busque por cidade"
        onChange={handleInputChange}
        value={filter}
      />
    </div>
  );
};

export default Tools;
