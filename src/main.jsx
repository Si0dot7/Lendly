import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Store } from './store/Store'
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Provider store={Store}>
      <App />
    </Provider> 
  </HashRouter>
);
