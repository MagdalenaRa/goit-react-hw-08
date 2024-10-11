import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import { addContact } from "../../redux/contacts/operations";

import css from "./ContactForm.module.css";
import toast, { Toaster } from "react-hot-toast";

function ContactForm() {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };

  const validationParams = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (contact, actions) => {
    dispatch(addContact(contact));
    toast.success("Your contact added sucsessfuly", { duration: 1500 });
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationParams}
      >
        <Form className={css.formWrapper}>
          <label className={css.wrapper}>
            <span className={css.label}>Name</span>
            <Field className={css.input} type="text" name="name" />
            <ErrorMessage
              className={css.message}
              name="name"
              component="span"
            />
          </label>

          <label className={css.wrapper}>
            <span className={css.label}>Number</span>
            <Field className={css.input} type="tel" name="number" />
            <ErrorMessage
              className={css.message}
              name="number"
              component="span"
            />
          </label>

          <button className={css.addContactBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
      <Toaster />
    </div>
  );
}

export default ContactForm;
