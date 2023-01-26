import React from "react";
import { useCreateUser } from "../../../hooks/useUsers";


const UserForm = () => {
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

export default UserForm;
