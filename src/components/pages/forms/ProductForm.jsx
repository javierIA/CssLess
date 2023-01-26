import React from "react";
import { useCreateProduct} from "../../../hooks/useProducts";
import DropRejection_Causes from "../../common/DropRejection_Causes"

const ProductForm = () => {
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
    <label htmlFor="part_number">Numero de Parte</label>
    <input type="text" name="part_number" id="part_number" required/>
  </div>
  <div>
    <label htmlFor="description">Casos de rechazo</label>
    <DropRejection_Causes id="description" required/>
  </div>
  <button type="submit">Enviar</button>
</form>
  );
};

export default ProductForm;
