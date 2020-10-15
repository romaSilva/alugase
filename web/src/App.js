import React from "react";

import Store from "./store/Store";
import Header from "./components/Header";
import Tools from "./containers/Tools";
import Modal from "./components/Modal";

import "./styles/global.css";

function App() {
  return (
    <Store>
      <Header />
      <Tools />
      <Modal />
    </Store>
  );
}

export default App;
