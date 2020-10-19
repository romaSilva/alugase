import React, { useEffect, useContext } from "react";
import globalContext from "../store/globalContext";

import Header from "../components/Header";
import Tools from "../components/Tools";
import Cards from "../containers/Cards";

import "../styles/pages/home.css";

const Home = () => {
  const { getAllRealties } = useContext(globalContext);

  useEffect(() => {
    getAllRealties(); // eslint-disable-next-line
  }, []);

  return (
    <div className="home-container">
      <Header />
      <Tools />
      <Cards />
    </div>
  );
};

export default Home;
