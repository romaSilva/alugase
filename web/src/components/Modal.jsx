import React, { useContext, useState, useEffect } from "react";
import globalContext from "../store/globalContext";

import Modal from "react-modal";

import "../styles/modal.css";

Modal.setAppElement("#root");

const AddModal = () => {
  const {
    modal,
    viaCepData,
    handleModalClick,
    handleViaCepApi,
    cleanViaCepData,
    handleFormSubmit,
  } = useContext(globalContext);

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");

  useEffect(() => {
    handleViaCepApi(cep); // eslint-disable-next-line
  }, [cep]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "owner") {
      setName(value);
    } else if (id === "cpf") {
      setCpf(value);
    } else if (id === "cep") {
      setCep(value);
    }
  };

  const cleanForm = () => {
    setName("");
    setCpf("");
    setCep("");
    cleanViaCepData();
  };

  return (
    <Modal
      style={modalStyle}
      isOpen={modal}
      onRequestClose={() => {
        handleModalClick(false);
        cleanForm();
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit({
            name,
            cpf,
            cep,
            address: viaCepData.address,
            city: viaCepData.city,
            state: viaCepData.state,
          });
        }}
        className="add-form"
      >
        <header>
          <h3>Preencha os dados</h3>
        </header>
        <fieldset>
          <label htmlFor="owner">Proprietário: </label>
          <input
            type="name"
            id="owner"
            value={name}
            onChange={handleInputChange}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="cpf">CPF: </label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={handleInputChange}
          />

          <label htmlFor="cep">CEP: </label>
          <input
            type="text"
            id="cep"
            value={cep}
            onChange={handleInputChange}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="address">Bairro: </label>
          <span id="address">{viaCepData.address}</span>
        </fieldset>

        <fieldset>
          <label htmlFor="city">Cidade: </label>
          <span id="adress">{viaCepData.city}</span>
          <label htmlFor="state">Estado: </label>
          <span id="state">{viaCepData.state}</span>
        </fieldset>

        <fieldset className="submit-button">
          <button type="submit">Cadastrar</button>
        </fieldset>
      </form>
    </Modal>
  );
};

const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, .5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "800px",
    width: "100%",
  },
};

export default AddModal;
