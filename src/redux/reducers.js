import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { addContact, deleteContact, filterContact } from "./actions";

const itemContactReducer = createReducer([], {
  [addContact]: (state, action) => {
    const findMap = state.find(
      (contact) =>
        contact.name.toLowerCase() === action.payload.name.toLowerCase()
    );
    if (findMap) {
      alert(`${findMap.name} is already in contacts.`);
      return;
    }
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    const deletes = state.filter((contact) => contact.id !== action.payload);
    return [...deletes];
  },
});
const filterContactReducer = createReducer("", {
  [filterContact]: (state, action) => action.payload,
});
export default combineReducers({
  items: itemContactReducer,
  filter: filterContactReducer,
});
