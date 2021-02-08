import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app/app";

import "./styles/style.scss";

const application = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDom.render(application, document.getElementById("intro"));
