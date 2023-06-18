import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { getError, getIsLoading } from "redux/contacts/selectors";
import { fetchContacts } from "redux/contacts/operations";
import Loader from "./Loader/Loader";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <Form />
      <h2> Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  );
};

export default App;