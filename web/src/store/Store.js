import React, { useReducer } from "react";
import axios from "axios";

import GlobalContext from "./globalContext";
import reducer from "./reducer";

const Store = (props) => {
  const initialState = { modal: false, orderBy: "0", viaCepData: {} };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleModalClick = (opened) => {
    console.log("Modal click...");

    dispatch({
      type: "SET_MODAL",
      payload: opened,
    });
  };

  const handleViaCepApi = (cep) => {
    if (cep.toString().length === 8) {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((res) => {
        const { bairro, localidade, uf } = res.data;

        dispatch({
          type: "SET_VIA_CEP_DATA",
          payload: { address: bairro, city: localidade, state: uf },
        });
      });
    }
  };

  const cleanViaCepData = () => {
    dispatch({
      type: "SET_VIA_CEP_DATA",
      payload: {},
    });
  };

  const handleFormSubmit = (data) => {
    const { name, cpf, cep, city, state } = data;

    if (name && cpf.length === 11 && cep.length === 8 && city && state) {
      console.log(data);
      dispatch({
        type: "SET_MODAL",
        payload: false,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        modal: state.modal,
        orderBy: state.orderBy,
        viaCepData: state.viaCepData,
        handleModalClick,
        handleViaCepApi,
        cleanViaCepData,
        handleFormSubmit,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Store;
