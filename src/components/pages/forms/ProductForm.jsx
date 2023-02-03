import React from "react";
import { useParams } from "react-router-dom";
import { useCreateProduct, useFetchProducts,useFetchProduct, useUpdateProduct} from "../../../hooks/useProducts";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export const ProductForm = () => {
  const { mutate: CreateProduct,status, error } = useCreateProduct();
  const initialValues = {
    name: "",
    part_number: "",
    description: ""
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nombre es requerido"),
    part_number: Yup.string().required("Numero de parte es requerido"),
    description: Yup.string().required("Descripción es requerido")

  });
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    CreateProduct(values);
    setSubmitting(false);
  };    
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, isSubmitting, values }) => (
        <Form  onSubmit={handleSubmit} >
          <div> 
            {status === "loading" && <p>Creando ...</p>}
            {status === "error" && <p>Error: {JSON.stringify(error.response.data  )}</p>}
            <label htmlFor="name">Nombre</label>
            <Field name="name" id="name" required />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="part_number">Número de parte</label>
            <Field name="part_number" id="part_number" required />
            <ErrorMessage name="part_number" component="div" />
          </div>
          <div>
            <label htmlFor="description">Descripción</label>
              <input type="text" name="description" />
            <ErrorMessage name="description" component="div" />
          </div>
          <button type="submit"  disabled={isSubmitting} >
            <Enviar></Enviar>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export  const UpdateProduct = (props) => {

  const {uuid} = useParams();
  const  {mutate: Update, status, error: error2 }= useUpdateProduct();

  const { data, isLoading,isIdle, error } = useFetchProduct(uuid);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (isIdle) return <div>Idle...</div>;
  const userData= data.data
  const initialValues ={
    name:  userData.name,
    part_number: userData.part_number,
    description: userData.description,
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
          <Field name="part_number" />
          <Field name="description" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );

}
