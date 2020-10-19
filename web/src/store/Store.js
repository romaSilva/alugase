import React, { useReducer } from "react";
import GlobalContext from "./globalContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

import reducer from "./reducer";

const Store = (props) => {
  const initialState = {
    appMgmt: { currentCard: 0, totalCards: 0, cardsPerPage: 9 },
    allRealties: [],
    filteredRealties: "",
    filter: "",
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

  //GET ALL REALTIES
  const getAllRealties = () => {
    console.log("Hello Barabra");
    axios.get("http://localhost:3333/realties").then((res) => {
      dispatch({
        type: "SET_ALL_REALTIES",
        payload: res.data,
      });
      dispatch({
        type: "SET_APP_MGMT",
        payload: {
          ...state.appMgmt,
          totalCards: res.data.length,
        },
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
    dispatch({
      type: "SET_FILTER",
      payload: search,
    });
    if (search.length === 0) {
      dispatch({
        type: "SET_FILTERED_REALTIES",
        payload: "",
      });
      dispatch({
        type: "SET_APP_MGMT",
        payload: {
          ...state.appMgmt,
          totalCards: state.allRealties.length,
        },
      });
    } else {
      axios
        .get(`http://localhost:3333/realties-filtered?search=${search}`)
        .then((res) => {
          dispatch({
            type: "SET_APP_MGMT",
            payload: {
              ...state.appMgmt,
              totalCards: res.data.length,
            },
          });
          dispatch({
            type: "SET_FILTERED_REALTIES",
            payload: res.data,
          });
        });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        appMgmt: state.appMgmt,
        allRealties: state.allRealties,
        filteredRealties: state.filteredRealties,
        filter: state.filter,
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
