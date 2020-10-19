import React, { useContext } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import globalContext from "../store/globalContext";

import Card from "../components/Card";
import Loading from "../components/Loading";

import "../styles/containers/cards.css";

const Cards = () => {
  const { appMgmt, allRealties, handlePagination } = useContext(globalContext);

  if (!allRealties) return <Loading />;

  return (
    <div className="outer-container">
      <div className="main-container">
        <div className="grid-container">
          <div
            className="arrowBack"
            onClick={() => handlePagination(-1)}
            style={{
              visibility: appMgmt.currentCard === 0 ? "hidden" : "visible",
            }}
          >
            <IoIosArrowBack size={35} />
          </div>

          {allRealties
            .slice(
              appMgmt.currentCard,
              appMgmt.currentCard + appMgmt.cardsPerPage
            )
            .map((realty) => (
              <Card key={realty.id} realty={realty} />
            ))}
          <div
            className="arrowFoward"
            onClick={() => handlePagination(1)}
            style={{
              visibility:
                appMgmt.currentCard >= appMgmt.totalCards - appMgmt.cardsPerPage
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
