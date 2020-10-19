import React, { useContext, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import globalContext from "../store/globalContext";

import Header from "../components/Header";
import Loading from "../components/Loading";

import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import "../styles/pages/updateForm.css";

const Form = () => {
  const { selectedRealty, handleUpdateFormSubmit, handleDelete } = useContext(
    globalContext
  );

  //form state data
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [value, setValue] = useState("");
  const [details, setDetails] = useState("");

  //handles the data typed on the form
  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "phone") {
      setPhone(value);
    } else if (id === "cep") {
      setCep(value);
    } else if (id === "value") {
      setValue(value);
    } else if (id === "details") {
      setDetails(value);
    }
  };

  //handles form validation
  const handleFormValidation = (e) => {
    e.preventDefault();

    const updateData = {
      id: selectedRealty.id,
      phone: phone || selectedRealty.phone,
      cep: cep.length === 8 ? cep : selectedRealty.cep,
      value: value || selectedRealty.value,
      details: details || selectedRealty.details,
    };
    handleUpdateFormSubmit(updateData);
  };

  return (
    <Fragment>
      <Header />
      <div className="button-container">
        <Link to="/" className="home-button">
          <HiOutlineArrowNarrowLeft />
        </Link>
      </div>

      {!selectedRealty.id ? (
        <Loading />
      ) : (
        <div className="form-container">
          <form className="add-form" onSubmit={handleFormValidation}>
            <header>
              <h3>Preencha os dados</h3>
            </header>

            <fieldset className="image-upload">
              <img src={selectedRealty.image} alt="" />
            </fieldset>

            <fieldset className="name-field">
              <label htmlFor="name">Nome do proprietário: </label>
              <input
                type="name"
                id="name"
                value={
                  (selectedRealty.owner && selectedRealty.owner.name) || " "
                }
                readOnly
                className="green"
              />
            </fieldset>

            <div className="group-fields">
              <fieldset>
                <label htmlFor="cpf">CPF: </label>
                <input
                  type="text"
                  id="cpf"
                  value={
                    (selectedRealty.owner && selectedRealty.owner.cpf) || " "
                  }
                  readOnly
                />
              </fieldset>

              <fieldset>
                <label htmlFor="phone">Telefone: </label>
                <input
                  type="text"
                  id="phone"
                  onChange={handleInputChange}
                  value={phone || selectedRealty.phone}
                />
              </fieldset>
            </div>

            <div className="group-fields">
              <fieldset>
                <label htmlFor="cep">CEP: </label>
                <input
                  type="text"
                  id="cep"
                  onChange={handleInputChange}
                  value={cep || selectedRealty.cep}
                />
              </fieldset>

              <fieldset>
                <label htmlFor="value">Valor (R$): </label>
                <input
                  type="number"
                  id="value"
                  onChange={handleInputChange}
                  value={value || selectedRealty.value}
                />
              </fieldset>
            </div>

            <fieldset>
              <label htmlFor="details">Detalhes: </label>
              <textarea
                name="details"
                id="details"
                cols="25"
                rows="10"
                onChange={handleInputChange}
                value={details || selectedRealty.details}
              ></textarea>
            </fieldset>

            <fieldset className="submit-button">
              <button type="submit">Cadastrar</button>
              <button
                id="delete-button"
                onClick={(e) => handleDelete(selectedRealty.id)}
              >
                <AiOutlineDelete />
              </button>
            </fieldset>
          </form>
        </div>
      )}
    </Fragment>
  );
};

export default Form;
