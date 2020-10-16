import React from "react";

import Store from "./store/Store";
import Header from "./components/Header";
import Tools from "./containers/Tools";
import Modal from "./components/Modal";
import Table from "./components/Table";

import "./styles/global.css";

function App() {
  return (
    <Store>
      <Header />
      <Tools />
      <Modal />
      <Table />
    </Store>
  );
}

export default App;
