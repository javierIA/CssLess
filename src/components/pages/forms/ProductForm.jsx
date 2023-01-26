import React from "react";
import { useCreateProduct } from "../../../hooks/useProducts";


const ProductForm = () => {
 const { mutate: CreateProduct } = useCreateProduct();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData);

    CreateProduct(product);
  
  };    

  return (
    <form  onSubmit={handleSubmit} >
  <div> 
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
  <button type="submit">Submit</button>
</form>
  );
};

export default ProductForm;
