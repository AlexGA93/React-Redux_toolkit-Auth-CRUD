import { configureStore } from "@reduxjs/toolkit";
import { ReduxStoreType } from "../types/reduxTypes";
import { userSlice } from "./states/user";


// create redux store
export const reduxStore = configureStore<ReduxStoreType>({
    reducer: {
        userReducer: userSlice.reducer
    }
});