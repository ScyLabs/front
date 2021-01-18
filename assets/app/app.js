import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import BaseApp from './BaseApp'
import "./i18n";

import "!style-loader!css-loader!./styles/app.css";

const root = document.getElementById("AppRoot");


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <BaseApp />
    </HashRouter>
  </React.StrictMode>,
  root
);
