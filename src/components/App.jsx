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
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import css from "./App.module.css";

const HomePage = lazy(() => import("../pages/Home/Home"));
const RegisterPage = lazy(() => import("../pages/Registration"));
const LoginPage = lazy(() => import("../pages/Login"));
const ContactsPage = lazy(() => import("../pages/Contacts/Contacts"));

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user, please wait...</b>
  ) : (
    <Layout>
      <Suspense fallback={null} className={css.container}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Routes>
      </Suspense>
      <Toaster />
    </Layout>
  );
}
