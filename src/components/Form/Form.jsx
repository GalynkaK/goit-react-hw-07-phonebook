import React, { useState } from "react";
import css from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contacts/operations";
import { getContacts } from "redux/contacts/selectors";


const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChangeName = e => {
    const { value } = e.target;
    setName(value);
  };

  const handleChangeNumber = e => {
    const { value } = e.target;
    setNumber(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const contactsList = [...contacts];
    if (
      contactsList.findIndex(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      ) !== -1
    ) {
      alert(`${name} is already in contacts!`);
    } else {
      dispatch(addContact({ name: name, phone: number }));
      setName("");
      setNumber("");
    }

    form.reset('');
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.label}>Name </label>
      <input
        className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
        value={name}
        onChange={handleChangeName}
      />
      <label className={css.label}>Number </label>
      <input
        className={css.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
        value={number}
        onChange={handleChangeNumber}
      />
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Form;