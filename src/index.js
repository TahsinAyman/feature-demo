import ReactDOM from "react-dom/client";
import React from "react";
import AppController from "./main/module/app/controller/AppController";
import configureAppStore from "./main/store";
import repository from "./main/repository";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const store = configureAppStore(repository);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppController />
    </Provider>
  </BrowserRouter>
);
