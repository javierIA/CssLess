import React from "react";
import { useCreateClients } from "../../../hooks/UseClients";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const ClientForm = () => {
  const { mutate: CreateClients, status, error } = useCreateClients();

  const handleSubmit = (values,isSubmitting) => {
    CreateClients(values);
    isSubmitting(false);
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nombre es requerido"),
    description: Yup.string().required("Descripción es requerido"),
    location: Yup.string().required("Ubicación es requerido"),
  });

  return (
    <Formik
      initialValues={{ name: "", description: "", location: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    > 
      {({ isSubmitting }) => (
        <Form>
          {status === "loading" && <p>Creando ...</p>}
          {status === "error" && (
            <p>Error: {JSON.stringify(error.response.data)}</p>
          )}
          <div>
            <label htmlFor="name">Nombre</label>
            <Field type="text" name="name" id="name" required />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="description">Descripción</label>
            <Field type="text" name="description" id="description" required />
            <ErrorMessage name="description" component="div" />
          </div>
          <div>
            <label htmlFor="location">Ubicación</label>
            <Field type="text" name="location" id="location" required />
            <ErrorMessage name="location" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ClientForm;
