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
    selectedRealty: {},
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
  const getAllRealties = async () => {
    const res = await axios.get("http://localhost:3333/realties");

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
  };

  //POST NEW REALTY
  const handleFormSubmit = async (formData) => {
    const { image, name, cpf, phone, cep, value, details } = formData;

    const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    if (res.data.erro !== true) {
      const { bairro, localidade, uf } = res.data;

      const ownerData = {
        name,
        cpf,
      };

      await axios.post(`http://localhost:3333/owners`, ownerData);

      const realtyData = new FormData();

      realtyData.append("phone", phone);
      realtyData.append("cep", cep);
      realtyData.append("address", bairro);
      realtyData.append("city", localidade);
      realtyData.append("state", uf);
      realtyData.append("value", value);
      realtyData.append("details", details);

      if (image) realtyData.append("image", image);

      await axios.post(
        `http://localhost:3333/owners/${cpf}/realties`,
        realtyData
      );

      history.push("/");
    }
  };

  //GET FILTERED REALTIES
  const handleCitySearch = async (search) => {
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
      const res = await axios.get(
        `http://localhost:3333/realties-filtered?search=${search}`
      );

      dispatch({
        type: "SET_FILTERED_REALTIES",
        payload: res.data,
      });

      dispatch({
        type: "SET_APP_MGMT",
        payload: {
          ...state.appMgmt,
          totalCards: res.data.length,
        },
      });
    }
  };

  //GET ONE REALTY
  const handleCardClick = async (realty) => {
    const { id } = realty;

    const res = await axios.get(`http://localhost:3333/realties/${id}/owners`);

    dispatch({
      type: "SET_SELECTED_REALTY",
      payload: res.data,
    });
  };

  //UPDATE REALTY
  const handleUpdateFormSubmit = async (updateData) => {
    const { id, phone, cep, value, details } = updateData;

    const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    if (res.data.erro !== true) {
      const { bairro, localidade, uf } = res.data;

      const realtyData = {
        cep,
        phone,
        value,
        details,
        address: bairro,
        city: localidade,
        state: uf,
      };

      await axios.put(`http://localhost:3333/realties/${id}`, realtyData);

      history.push("/");
    }
  };

  //DELETE REALTY
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3333/realties/${id}`);

    history.push("/");
  };

  return (
    <GlobalContext.Provider
      value={{
        appMgmt: state.appMgmt,
        allRealties: state.allRealties,
        filteredRealties: state.filteredRealties,
        filter: state.filter,
        selectedRealty: state.selectedRealty,
        handlePagination,
        getAllRealties,
        handleFormSubmit,
        handleCitySearch,
        handleCardClick,
        handleUpdateFormSubmit,
        handleDelete,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Store;
