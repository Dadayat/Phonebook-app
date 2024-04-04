// import { ContactForm } from "./ContactForm/ContactForm";
// import { SearchBox } from "./SearchBox/SearchBox.jsx";
// import { ContactList } from "./ContactList/ContactList";
// import css from "./App.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { fetchContacts } from "../redux/contactsOps.js";
// import { Loader } from "./Loader/Loader.jsx";
// import { ErrorMessage } from "./ErrorMessage/ErrorMessage.jsx";
// import {
//   selectContactError,
//   selectContactLoading,
// } from "../redux/contactsSlice.js";

// export const App = () => {
//   const dispatch = useDispatch();
//   const loading = useSelector(selectContactLoading);
//   const error = useSelector(selectContactError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className={css.font}>
//       <div className={css.container}>
//         <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Phonebook</h1>
//         <ContactForm />
//         <h2>Contacts</h2>
//         <SearchBox />
//         {error && <ErrorMessage />}
//         {loading && <Loader />}
//         <ContactList />
//       </div>
//     </div>
//   );
// };
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./Layout/Layout";

const HomePage = lazy(() => import("../pages/Home"));
const RegisterPage = lazy(() => import("../pages/Registration"));
const LoginPage = lazy(() => import("../pages/Login"));
const ContactsPage = lazy(() => import("../pages/Contacts"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
      <Toaster />
    </Layout>
  );
}
