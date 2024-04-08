import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        console.log("Log In");
      })
      .catch(() => {
        toast("User Not Found or Wrong Password", {
          icon: "🥵",
          style: {
            backgroundColor: "#b35b95",
            borderRadius: "20px",
            color: "#fff",
          },
        });
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className={css.form}>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
