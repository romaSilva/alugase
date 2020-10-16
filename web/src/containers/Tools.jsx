import React, { useContext } from "react";
import globalContext from "../store/globalContext";

import Button from "../components/Button";

import { BsArrowUpDown } from "react-icons/bs";
import "../styles/tools.css";

const Tools = () => {
  const { handleModalClick } = useContext(globalContext);

  return (
    <div className="tools">
      <Button click={handleModalClick} opened={true} title="Cadastrar Imóvel" />
      <label htmlFor="filter">Ordenar por:</label>
      <select name="filter" id="filter">
        <option value="">Selecione uma opção</option>
        <option value="city">Cidade</option>
        <option value="value">Estado</option>
      </select>
      <button className="order-button">
        <BsArrowUpDown size={32} />
      </button>
    </div>
  );
};

export default Tools;
