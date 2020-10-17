import React, { useContext, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import globalContext from "../store/globalContext";

import Header from "../components/Header";

import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import "../styles/pages/form.css";

const Form = () => {
  const { handleFormSubmit } = useContext(globalContext);

  //form state data
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [value, setValue] = useState("");
  const [details, setDetails] = useState("");

  //handles the data typed on the form
  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "name") {
      setName(value);
    } else if (id === "cpf") {
      setCpf(value);
    } else if (id === "phone") {
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
    if (
      name &&
      cpf.length === 11 &&
      phone &&
      cep.length === 8 &&
      value &&
      details
    ) {
      const formData = {
        name,
        cpf,
        phone,
        cep,
        value,
        details,
      };
      handleFormSubmit(formData);
    }
  };

  return (
    <Fragment>
      <Header />

      <div className="button-container">
        <Link to="/" className="home-button">
          <HiOutlineArrowNarrowLeft />
        </Link>
      </div>

      <div className="form-container">
        <form className="add-form" onSubmit={handleFormValidation}>
          <header>
            <h3>Preencha os dados</h3>
          </header>

          <fieldset className="image-upload">
            <div></div>
          </fieldset>

          <fieldset className="name-field">
            <label htmlFor="name">Nome do proprietário: </label>
            <input
              type="name"
              id="name"
              value={name}
              onChange={handleInputChange}
            />
          </fieldset>

          <div className="group-fields">
            <fieldset>
              <label htmlFor="cpf">CPF: </label>
              <input
                type="text"
                id="cpf"
                value={cpf}
                onChange={handleInputChange}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="phone">Telefone: </label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={handleInputChange}
              />
            </fieldset>
          </div>

          <div className="group-fields">
            <fieldset>
              <label htmlFor="cep">CEP: </label>
              <input
                type="text"
                id="cep"
                value={cep}
                onChange={handleInputChange}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="value">Valor (R$): </label>
              <input
                type="number"
                id="value"
                value={value}
                onChange={handleInputChange}
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
              value={details}
              onChange={handleInputChange}
            ></textarea>
          </fieldset>

          <fieldset className="submit-button">
            <button type="submit">Cadastrar</button>
          </fieldset>
        </form>
      </div>
    </Fragment>
  );
};

export default Form;
