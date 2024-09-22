import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useId } from "react";
import * as yup from "yup";
import styles from "./RegistrationForm.module.css";  

import { registerThunk } from "../../redux/auth/operations";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Please, provide your name"),
  email: yup
    .string()
    .email("Please, provide your valid email!")
    .required("Please, provide your email"),
  password: yup
    .string()
    .min(7, "Too Short!")
    .max(18, "Too Long!")
    .required("Please, provide your password"),
});

const RegistrationForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(registerThunk(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <div className="container">
        <Form className={styles.form}>
          <div className={styles.inputsContainer}>
            <div className={styles.fieldWrapper}>
              <h2 className={styles.title}>Register an account</h2>
              <label htmlFor={nameFieldId}>Username</label>
              <Field
                className={styles.input}
                type="text"
                name="name"
                placeholder="Enter your username..."
                id={nameFieldId}
              />
              <ErrorMessage className={styles.error} name="name" component="span" />
            </div>
            <div className={styles.fieldWrapper}>
              <label htmlFor={emailFieldId}>Email</label>
              <Field
                className={styles.input}
                type="email"
                name="email"
                placeholder="Enter your email..."
                id={emailFieldId}
              />
              <ErrorMessage className={styles.error} name="email" component="span" />
            </div>
            <div className={styles.fieldWrapper}>
              <label htmlFor={passwordFieldId}>Password</label>
              <Field
                className={styles.input}
                type="password"
                name="password"
                placeholder="Enter your password..."
                id={passwordFieldId}
              />
              <ErrorMessage className={styles.error} name="password" component="span" />
              <div className={styles.linkContainer}>
                <NavLink className={styles.link} to="/login">
                  Already have an account?
                </NavLink>
              </div>
              <div className={styles.btnContainer}>
                <button className={styles.btn} type="submit">
                  Register
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default RegistrationForm;