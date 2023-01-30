import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DropClients } from "../../common/FormikDropDown";
import { useCreateTicket } from "../../../hooks/useTickets";
import * as Yup from 'yup';

const TicketForm = () => {
  const { mutate: createTicket, status, error } = useCreateTicket();
  const initialValues = {
    service_number: "",
    quote_number: "",
    billing_type: "",
    authorized_pieces: "",
    standard_time: "",
    authorized_hours: "",
    is_active: false,
    in_pause: false,
    is_rework: false,
    extra_attributes: "",
    client: "",
    service_location: ""
  }
  const validationSchema = Yup.object().shape({
    service_number: Yup.string().required("Service number is required"),
    quote_number: Yup.string().required("Quote number is required"),
    billing_type: Yup.string().required("Billing type is required"),
    authorized_pieces: Yup.string().required("Authorized pieces is required"),
    standard_time: Yup.string().required("Standard time is required"),
    authorized_hours: Yup.string().required("Authorized hours is required"),
    is_active: Yup.string().required("Active status is required"),
    in_pause: Yup.string().required("Pause status is required"),
    is_rework: Yup.string().required("Rework status is required"),
    extra_attributes: Yup.string().required("Extra attributes are required"),
  });
   
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    createTicket(values);
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
           {({ handleSubmit, isSubmitting, values })  => (

      <Form onSubmit={handleSubmit}>
        {status === "loading" && <p>Creando ...</p>}
        {status === "error" && <p>Error: {JSON.stringify(error.response.data)}</p>}
        <div>
          <label htmlFor="service_number">Numero de Servicio</label>
          <Field type="text" name="service_number" id="service_number" required />
          <ErrorMessage name="service_number" component="div" />
        </div>
        <div>
          <label htmlFor="quote_number">Numero de Cotización</label>
          <Field type="text" name="quote_number" id="quote_number" />
          <ErrorMessage name="quote_number" component="div" />
        </div>
        <>
        <div>
          <label htmlFor="billing_type">Tipo de facturación</label>
          <Field as="select" name="billing_type" id="billing_type" required>
            <option value="">Seleccione</option>
            <option value="1">Hora</option>
            <option value="2">Tiempo Estándar</option>
            <option value="3">Piezas</option>
          </Field>
          <ErrorMessage name="billing_type" component="div" />
        </div>  
        <div>
          <label htmlFor="authorized_pieces">Piezas Autorizadas</label>
          <Field type="number" name="authorized_pieces" id="authorized_pieces" />
          <ErrorMessage name="authorized_pieces" component="div" />
        </div><div>
          <label htmlFor="standard_time">Tiempo Estándar</label>
          <Field type="number" name="standard_time" id="standard_time" />
          <ErrorMessage name="standard_time" component="div" />
        </div><div>
          <label htmlFor="authorized_hours">Horas Autorizadas</label>
          <Field type="number" name="authorized_hours" id="authorized_hours" />
          <ErrorMessage name="authorized_hours" component="div" />
        </div><div>
          <label htmlFor="is_active">Activo?</label>
          <Field type="checkbox" name="is_active" id="is_active" />
          <ErrorMessage name="is_active" component="div" />
        </div><div>
          <label htmlFor="in_pause">En Pausa?</label>
          <Field type="checkbox" name="in_pause" id="in_pause" />
          <ErrorMessage name="in_pause" component="div" />

        </div><div>
          <label htmlFor="extra_attributes">Atributos extra</label>
          <Field type="text" name="extra_attributes" id="extra_attributes" />
          <ErrorMessage name="extra_attributes" component="div" />
        </div><div>
          <DropClients />
          <ErrorMessage name="clients" component="div" />
        </div>
        
        <button type="submit" disabled={isSubmitting}>
          Crear
        </button></>
</Form>
)}
</Formik>
);
};
export default TicketForm;
