import React, { useEffect, useState } from "react";
import { useParams}  from "react-router-dom"
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { useCreateUser, useFetchUser as useReactQuery, useUpdateUser } from "../../../hooks/useUsers";



export const UserForm = () => {
  const  {mutate: CreateUser, status, error }= useCreateUser();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    CreateUser(values);
    resetForm();
    setSubmitting(false);
  };    

  const initialValues = {
    username: "",
    email: "",
    date_birth: "",
    email_alt: "",
    tel_num: "",
    tel_num_emergency: "",
    company_name: "",
    is_employee: false
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username es requerido"),
    email: Yup.string().email("Ingresa un email valido").required("Email es requerido"),
    date_birth: Yup.date().required("Fecha de nacimiento es requerido"),
    email_alt: Yup.string().email("Ingresa un email valido").required("Email alternativo es requerido"),
    tel_num: Yup.string().required("Numero de teléfono es requerido"),
    tel_num_emergency: Yup.string().required("Teléfono de emergencia es requerido"),
    company_name: Yup.string().required("Company name es requerido"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
        <Form onSubmit={handleSubmit}>
        {status === "loading" && <p>Creando ...</p>}
        {status === "error" && <p>Error: {JSON.stringify(error.response.data)}</p>}
          <div>
            <label htmlFor="username">Usaurio</label>
            <Field type="text" name="username" id="username" required />
            {errors.username && touched.username && <p>{errors.username}</p>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" id="email" required />
            {errors.email && touched.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="date_birth">Fecha de nacimiento</label>

            <Field type="date" name="date_birth" id="date_birth" required />
            {errors.date_birth && touched.date_birth && <p>{errors.date_birth}</p>}
          </div>
          <div>
            <label htmlFor="email_alt">Email alternativo</label>
            <Field type="email" name="email_alt" id="email_alt" required />
            {errors.email_alt && touched.email_alt && <p>{errors.email_alt}</p>}
          </div>
          <div>
            <label htmlFor="tel_num">Numero de teléfono</label>
            <Field type="text" name="tel_num" id="tel_num" required />  
            {errors.tel_num && touched.tel_num && <p>{errors.tel_num}</p>}
          </div>  
          <div>
            <label htmlFor="tel_num_emergency">Telefono de emergencia</label>
            <Field type="text" name="tel_num_emergency" id="tel_num_emergency" required />
            {errors.tel_num_emergency && touched.tel_num_emergency && <p>{errors.tel_num_emergency}</p>}
          </div>
          <div>
            <label htmlFor="company_name">Nombre de la compañia</label>
            <Field type="text" name="company_name" id="company_name" required />
            {errors.company_name && touched.company_name && <p>{errors.company_name}</p>}
          </div>
          <div>
            <label htmlFor="is_employee">Es empleado</label>
            <Field type="checkbox" name="is_employee" id="is_employee" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Crear
          </button>
        </Form>
      )}
    </Formik>
  );
};

export  const UpdateForm = (props) => {

  const {uuid} = useParams();
  const  {mutate: Update, status, error: error2 }= useUpdateUser();

  const { data, isLoading,isIdle, error } = useReactQuery(uuid);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (isIdle) return <div>Idle...</div>;
  const userData= data.data
  const initialValues ={
    username:  userData.username,
    email: userData.email,
    date_birth: userData.date_birth,
    email_alt: userData.email_alt,
    tel_num: userData.tel_num,
    tel_num_emergency: userData.tel_num_emergency,
    company_name: userData.company_name,
    is_employee: userData.is_employee
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
          <Field name="username" />
          <Field name="email" />
          <Field name="date_birth" />
          <Field name="email_alt" />
          <Field name="tel_num" />
          <Field name="tel_num_emergency" />
          <Field name="company_name" />
          <Field name="is_employee" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}