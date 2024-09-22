import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useDispatch } from "react-redux";
import * as yup from 'yup';

import styles from "./ContactForm.module.css";  

import { useId } from 'react';
import { addContactsThunk } from '../../redux/contacts/operations';

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name cannot exceed 50 characters")
      .trim(),
    number: yup
      .string()
      .required("Number is required")
      .matches(/^[\d-]+$/, "Number must contain only digits or hyphens")
      .min(3, "Number must be at least 3 characters")
      .max(12, "Number cannot exceed 12 characters"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContactsThunk(values));
    actions.resetForm();
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Add a person</h2>
      <div className={styles.formWrapper}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className={styles.fieldGroup}>
              <label htmlFor={nameFieldId}>Name</label>
              <Field
                type="text"
                id={nameFieldId}
                name="name"
                placeholder="Enter name..."
                className={styles.inputField}
              />
              <ErrorMessage
                className={styles.errorMessage}
                name="name"
                component="span"
              />
            </div>
            <div className={styles.fieldGroup}>
              <label htmlFor={numberFieldId}>Number</label>
              <Field
                type="text"
                id={numberFieldId}
                name="number"
                placeholder="Enter phone number..."
                className={styles.inputField}
              />
              <ErrorMessage
                className={styles.errorMessage}
                name="number"
                component="span"
              />
            </div>
            <button type="submit" className={styles.submitButton}>Add contact</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;