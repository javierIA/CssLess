import React from "react";
import { useParams } from "react-router-dom";
import { useCreateProduct, useFetchProducts,useFetchProduct, useUpdateProduct} from "../../../hooks/useProducts";
import DropRejection_Causes from "../../common/DropRejection_Causes"
import { Formik, Form, Field } from 'formik';

export const ProductForm = () => {
 const { mutate: CreateProduct,status, error } = useCreateProduct();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const products = Object.fromEntries(formData); 
    console.log(products);
    CreateProduct(products);
  };    

  return (
    
    <form  onSubmit={handleSubmit} >
  <div> 
  {status === "loading" && <p>Creando ...</p>}
      {status === "error" && <p>Error: {JSON.stringify(error.response.data  )}</p>}
    <label htmlFor="name">Nombre</label>
    <input type="text" name="name" id="name" required/>
  </div>
  <div>
    <label htmlFor="part_number">Número de parte</label>
    <input type="text" name="part_number" id="part_number" required/>
  </div>
  <div>
    <label htmlFor="description">Descripción</label>
    <input type="text" name="description" id="description" required/>
  </div>
  <button type="submit">Enviar</button>
</form>
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
