import React from "react";
import { useCreateProduct} from "../../../hooks/useProducts";
import {Formik, Field, ErrorMessage,Form} from "formik";
import {DropRejection_Causes} from "../../common/FormikDropDown"
import * as Yup from 'yup';

const ProductForm = () => {
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
            <label htmlFor="part_number">Numero de Parte</label>
            <Field name="part_number" id="part_number" required />
            <ErrorMessage name="part_number" component="div" />
          </div>
          <div>
            <label htmlFor="description">Casos de rechazo</label>
              <DropRejection_Causes />
            <ErrorMessage name="description" component="div" />
          </div>
          <button type="submit"  disabled={isSubmitting} >
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
