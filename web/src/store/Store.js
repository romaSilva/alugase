import React, { useReducer } from "react";
import GlobalContext from "./globalContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

import reducer from "./reducer";

const Store = (props) => {
  const initialState = { newData: {} };

  const [state, dispatch] = useReducer(reducer, initialState);

  const history = useHistory();

  const handleFormSubmit = (formData) => {
    const { cep } = formData;

    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => {
        if (res.data.erro !== true) {
          const { bairro, localidade, uf } = res.data;

          const myData = {
            ...formData,
            address: bairro,
            city: localidade,
            state: uf,
          };

          dispatch({
            type: "SET_NEW_DATA",
            payload: { ...myData },
          });

          //POST
          console.log(myData);

          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCitySearch = (search) => {
    console.log(search);
  };

  return (
    <GlobalContext.Provider
      value={{
        newData: state.newData,
        handleFormSubmit,
        handleCitySearch,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Store;
