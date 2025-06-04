import { Field, Formik, Form, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { object, string } from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/ContactsSlice";

const personSchema = object().shape({
  username: string().min(3, "To short").max(50, "To long").required("Required"),
  number: string()
    .min(3, "To short")
    .max(50, "To long")
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Must be valid")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.username,
        number: values.number,
      })
    );

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={personSchema}
    >
      <Form className={css.container}>
        <Field type="text" name="username" placeholder="David Bowie" />
        <ErrorMessage name="username" component="div" />
        <Field type="tel" name="number" placeholder="123-45-67" />
        <ErrorMessage name="number" component="div" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
