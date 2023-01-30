import React, { useEffect, useState } from "react";
import { useParams}  from "react-router-dom"
import { useCreateUser, useFetchUser as useReactQuery, useUpdateUser } from "../../../hooks/useUsers";
import { Formik, Form, Field } from 'formik';



export const UserForm = () => {
  const  {mutate: CreateUser, status, error }= useCreateUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData);
    console.log(user); 
    CreateUser(user);
  };    

  return (
    <form  onSubmit={handleSubmit} >
    {status === "loading" && <p>Creando ...</p>}
      {status === "error" && <p>Error: {JSON.stringify(error.response.data  )}</p>}
  <div>
    <label htmlFor="username">Usaurio</label>
    <input type="text" name="username" id="username" required/>
  </div>
  <div>
    <label htmlFor="email">Email</label>
    <input type="email" name="email" id="email" required/>
  </div>
  <div>
    <label htmlFor="date_birth">Fecha de naciemiento</label>
    <input type="date" name="date_birth" id="date_birth" required/>
  </div>
  <div>
    <label htmlFor="email_alt">Email altenativo</label>
    <input type="email" name="email_alt" id="email_alt" required/>
  </div>
  <div>
    <label htmlFor="tel_num">Numero de Telefono</label>
    <input type="tel" name="tel_num" id="tel_num" required/>
  </div>
  <div>
    <label htmlFor="tel_num_emergency">Telefono de Emergencia</label>
    <input type="tel" name="tel_num_emergency" id="tel_num_emergency" required/>
  </div>
  <div>
    <label htmlFor="company_name">Company Name</label>
    <input type="text" name="company_name" id="company_name" required/>
  </div>
  <div>
    <label htmlFor="is_employee">Is Employee?</label>
    <input type="checkbox" name="is_employee" id="is_employee" required/>
  </div>
  <button type="submit">Submit</button>
</form>
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