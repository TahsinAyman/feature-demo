import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import middleware from "./middleware";

const configureAppStore = (repository) =>
  configureStore({
    reducer: reducer,
    middleware: middleware.map(m => m(repository)),
  });

export default configureAppStore;