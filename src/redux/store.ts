import { configureStore } from "@reduxjs/toolkit";

interface ReduxAppStore {
    user: any; // TODO: change this to proper type
}

// create redux store
const reduxStore = configureStore({});