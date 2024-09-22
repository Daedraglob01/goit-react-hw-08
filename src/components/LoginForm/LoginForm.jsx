import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useId } from "react";
import * as Yup from "yup";
import styles from "./LoginForm.module.css";  

import { loginThunk } from "../../redux/auth/operations";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please, provide your valid email!")
    .required("Please, provide your email"),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(18, "Too Long!")
    .required("Please, provide your password"),
});

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(loginThunk(values));
    actions.resetForm();
  };

  return (
    <div className={styles.container}>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        <Form className={styles.formWrapper}>
          <div className={styles.inputsGroup}>
            <h2 className={styles.title}>Login</h2>
            <div className={styles.inputField}>
              <label htmlFor={emailFieldId}>Email</label>
              <Field
                className={styles.input}
                type="email"
                name="email"
                placeholder="Enter your email..."
                id={emailFieldId}
              />
              <ErrorMessage
                className={styles.errorMessage}
                name="email"
                component="span"
              />
            </div>
            <div className={styles.inputField}>
              <label htmlFor={passwordFieldId}>Password</label>
              <Field
                className={styles.input}
                type="password"
                name="password"
                placeholder="Enter your password..."
                id={passwordFieldId}
              />
              <ErrorMessage
                className={styles.errorMessage}
                name="password"
                component="span"
              />
              <div className={styles.linkContainer}>
                <Link to="/register" className={styles.link}>
                  Do not have an account?
                </Link>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.button}>
                Login
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;