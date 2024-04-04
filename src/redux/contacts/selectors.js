import { selectContactFilter } from "../filters/selectors";
import { createSelector } from "@reduxjs/toolkit";

export const selectContactLoading = (state) => state.contacts.loading;

export const selectContactError = (state) => state.contacts.error;

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectContactFilter],
  (contacts, contactsFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
    );
  }
);
