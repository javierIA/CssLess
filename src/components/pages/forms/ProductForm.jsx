import React from "react";
import { useCreateProduct } from "../../../hooks/useProducts";


const ProductForm = () => {
 const { mutate: CreateProduct } = useCreateProduct();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData);
    console.log(user); 

    CreateProduct(user);
  
  };    

  return (
    <form  onSubmit={handleSubmit} >
  <div> 
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" required/>
  </div>
  <div>
    <label htmlFor="part_number">Part Number</label>
    <input type="text" name="part_number" id="part_number" required/>
  </div>
  <div>
    <label htmlFor="rejection_causes">Rejection Causes</label>
    <input type="text" name="rejection_causes" id="rejection_causes" required/>

  </div>
  <button type="submit">Submit</button>
</form>
  );
};

export default ProductForm;
