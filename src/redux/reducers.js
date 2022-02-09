import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { addContact, deleteContact, filterContact } from "./actions";

const itemContactReducer = createReducer([], {
  [addContact]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});
const filterContactReducer = createReducer("", {
  [filterContact]: (state, action) => action.payload,
});
export default combineReducers({
  items: itemContactReducer,
  filter: filterContactReducer,
});
