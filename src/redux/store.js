import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters/slice";
import { contactsReducer } from "./contacts/slice";
import { authReducer } from "./auth/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
