import React from "react";
import { useCreateClients } from "../../../hooks/UseClients";


const ClientForm = () => {
 const { mutate: CreateClients ,status, error} = useCreateClients();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const client = Object.fromEntries(formData);

    CreateClients(client);
  
  };    

  return (
    <form  onSubmit={handleSubmit} >
        {status === "loading" && <p>Creando ...</p>}
      {status === "error" && <p>Error: {JSON.stringify(error.response.data  )}</p>}
  <div> 
    <label htmlFor="name">Nombre</label>
    <input type="text" name="name" id="name" required/>
  </div>
  <div>
    <label htmlFor="description">Descripción</label>
    <input type="text" name="description" id="description" required/>
  </div>
  <div>
    <label htmlFor="lacation">Ubicación</label>
    <input type="text" name="lacation" id="lacation" required/>
      </div>
  <button type="submit">Enviar</button>
</form>

  );
};

export default ClientForm;
