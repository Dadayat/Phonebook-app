import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" placeholder="Example Name" />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" placeholder="example@mail.com"/>
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" placeholder="examplepwd12345"/>
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
