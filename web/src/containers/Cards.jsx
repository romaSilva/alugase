import React, { useContext } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import globalContext from "../store/globalContext";

import Card from "../components/Card";
import Loading from "../components/Loading";

import "../styles/containers/cards.css";

const Cards = () => {
  const {
    appMgmt,
    allRealties,
    filteredRealties,
    filter,
    handlePagination,
  } = useContext(globalContext);

  if (allRealties.length === 0) return <Loading />;

  return (
    <div className="outer-container">
      <div className="main-container">
        <div className="grid-container">
          <div
            className="arrowBack"
            onClick={() => handlePagination(-1)}
            style={{
              visibility:
                appMgmt.currentCard === 0 ||
                (!filteredRealties.length && filter)
                  ? "hidden"
                  : "visible",
            }}
          >
            <IoIosArrowBack size={35} />
          </div>

          {filteredRealties
            ? filteredRealties
                .slice(
                  appMgmt.currentCard,
                  appMgmt.currentCard + appMgmt.cardsPerPage
                )
                .map((realty) => <Card key={realty.id} realty={realty} />)
            : allRealties
                .slice(
                  appMgmt.currentCard,
                  appMgmt.currentCard + appMgmt.cardsPerPage
                )
                .map((realty) => <Card key={realty.id} realty={realty} />)}
          <div
            className="arrowFoward"
            onClick={() => handlePagination(1)}
            style={{
              visibility:
                appMgmt.currentCard >=
                  appMgmt.totalCards - appMgmt.cardsPerPage ||
                (!filteredRealties.length && filter)
                  ? "hidden"
                  : "visible",
            }}
          >
            <IoIosArrowForward className="arrowFoward" size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
