import React from "react";
import { useCreaterejection_causes} from "../../../hooks/useRejection_causes";

const RejectionForm = () => {
 const { mutate: CreateRejection,status, error } = useCreaterejection_causes();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const Rejection = Object.fromEntries(formData); 
    console.log(Rejection);
    CreateRejection(Rejection);
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
    <label htmlFor="description">Description</label>
    <input type="text" name="description" id="description" required/>
  </div>
  <button type="submit">Enviar</button>
</form>
  );
};

export default RejectionForm;
