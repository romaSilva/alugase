import React, { useReducer } from "react";
import GlobalContext from "./globalContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

import reducer from "./reducer";

const Store = (props) => {
  const initialState = {
    appMgmt: { loading: false, currentCard: 0, totalCards: 0, cardsPerPage: 9 },
    allRealties: "",
    newData: {},
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const history = useHistory();

  const handlePagination = (direction) => {
    if (direction > 0) {
      dispatch({
        type: "SET_APP_MGMT",
        payload: {
          ...state.appMgmt,
          currentCard: state.appMgmt.currentCard + state.appMgmt.cardsPerPage,
        },
      });
    } else {
      dispatch({
        type: "SET_APP_MGMT",
        payload: {
          ...state.appMgmt,
          currentCard: state.appMgmt.currentCard - state.appMgmt.cardsPerPage,
        },
      });
    }
  };

  //gets all realties and updates the state
  const getAllRealties = () => {
    axios.get("http://localhost:3333/realties").then((res) => {
      dispatch({
        type: "SET_ALL_REALTIES",
        payload: res.data,
      });
      dispatch({
        type: "SET_APP_MGMT",
        payload: { ...state.appMgmt, totalCards: res.data.length },
      });
    });
  };

  //POST NEW REALTY
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

  //GET FILTERED REALTIES
  const handleCitySearch = (search) => {
    console.log(search);
  };

  return (
    <GlobalContext.Provider
      value={{
        appMgmt: state.appMgmt,
        allRealties: state.allRealties,
        newData: state.newData,
        handlePagination,
        getAllRealties,
        handleFormSubmit,
        handleCitySearch,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Store;
