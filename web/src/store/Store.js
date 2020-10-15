import React, { useReducer } from "react";

import GlobalContext from "./globalContext";
import reducer from "./reducer";

const Store = (props) => {
  const initialState = { modal: false, orderBy: "0" };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleModalClick = (opened) => {
    console.log("Modal click...");

    dispatch({
      type: "SET_MODAL",
      payload: opened,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ modal: state.modal, orderBy: state.orderBy, handleModalClick }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Store;
