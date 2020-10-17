import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Store from "./store/Store";
import Home from "./pages/Home";
import Form from "./pages/Form";

const Routes = () => {
  return (
    <BrowserRouter>
      <Store>
        <Route component={Home} exact path="/" />
        <Route component={Form} path="/form" />
      </Store>
    </BrowserRouter>
  );
};

export default Routes;
