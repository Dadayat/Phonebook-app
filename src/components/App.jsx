import { ContactForm } from "./ContactForm/ContactForm";
import { SearchBox } from "./SearchBox/SearchBox.jsx";
import { ContactList } from "./ContactList/ContactList";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps.js";
import { Loader } from "./Loader/Loader.jsx";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage.jsx";
import {
  selectContactError,
  selectContactLoading,
} from "../redux/contactsSlice.js";

export const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectContactLoading);
  const error = useSelector(selectContactError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.font}>
      <div className={css.container}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <SearchBox />
        {error && <ErrorMessage />}
        {loading && <Loader />}
        <ContactList />
      </div>
    </div>
  );
};
