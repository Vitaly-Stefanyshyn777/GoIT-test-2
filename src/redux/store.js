import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filter/filtersSlice";
import { contactReducer } from "./contact/contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filtersReducer,
  },
});
