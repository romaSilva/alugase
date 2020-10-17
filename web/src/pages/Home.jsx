import React, { Fragment } from "react";

import Header from "../components/Header";
import Tools from "../components/Tools";
import Table from "../components/Table";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Tools />
      <Table />
    </Fragment>
  );
};

export default Home;
