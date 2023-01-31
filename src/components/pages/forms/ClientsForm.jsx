import React from "react";
import { useCreateClient, useFetchClient, useUpdateClient } from "../../../hooks/UseClients";
import { Formik, Form, Field } from 'formik';
import { useParams}  from "react-router-dom";
import * as Yup from "yup";



export const ClientForm = () => {
 const { mutate: CreateClients ,status, error} = useCreateClient();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const client = Object.fromEntries(formData);

    CreateClients(client);
  
  };    

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

export  const UpdateClient = (props) => {

  const {uuid} = useParams();
  const  {mutate: Update, status, error: error2 }= useUpdateClient();

  const { data, isLoading,isIdle, error } = useFetchClient(uuid);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (isIdle) return <div>Idle...</div>;
  const userData= data.data
  const initialValues ={
    name:  userData.name,
    description: userData.description,
    locations: userData.locations
    

  }
  const handleSubmit = (values, { setSubmitting, resetForm}) => {
    values.uuid = uuid;
    setSubmitting(true);
    Update(values);
    setSubmitting(false);

  }
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting, values, handleChange, handleBlur, handleSubmit, errors, touched}) => (
        <Form >
          <Field name="name" />
          <Field name="description" />
          

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

