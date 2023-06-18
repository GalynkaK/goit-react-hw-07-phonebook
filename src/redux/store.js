import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacts-selector';
import { filterReducer } from './contacts/filter';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;