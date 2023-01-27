import React from "react";
import { useCreateTicket} from "../../../hooks/useTickets";
import DropRejection_Causes from "../../common/DropRejection_Causes"
import DropProducts from "../../common/DropProducts"

const TicketForm = () => {
 const { mutate: CreateTicket,status, error } = useCreateTicket();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const Rejection = Object.fromEntries(formData); 
    console.log(Rejection);
    CreateTicket(Rejection);
  };    

  return (
    
  <form onSubmit={handleSubmit}>
    {status === "loading" && <p>Enviando...</p>}
    {status === "error" && <p>Error: {error.response}</p>}
   
    <div>
      <label htmlFor="service_number">Numero de Servicio</label>
      <input type="text" name="service_number" id="service_number"  required/>
    </div>
    <div>
      <label htmlFor="quote_number">Numero de Cotizacion</label>
      <input type="text" name="quote_number" id="quote_number"  required/>
    </div>
    <div>
      <label htmlFor="billing_type">Tipo de facturacion</label>
      <select name="billing_type" id="billing_type" required>
        <option value="1">Hora</option>
        <option value="2">Tiempo Estandar </option>
        <option value="3"> Piezas</option>
      </select>
    </div>
    <div>
      <label htmlFor="authorized_pieces">Piezas Autorizadas</label>
      <input type="number" name="authorized_pieces" id="authorized_pieces" required/>
    </div>
    <div>
      <label htmlFor="standard_time">Tiempo Estandar</label>
      <input type="number" name="standard_time" id="standard_time" required/>
    </div>
    <div>
      <label htmlFor="authorized_hours">Horas Autorizadas</label>
      <input type="number" name="authorized_hours" id="authorized_hours" required/>
    </div>
    <div>
      <label htmlFor="is_active">Activo?</label>
      <input type="checkbox" name="is_active" id="is_active"  />
    </div>
    <div>
      <label htmlFor="in_pause">En Pausa?</label>
      <input type="checkbox" name="in_pause" id="in_pause" />
    </div>
    <div>
 
    <div>
      <label htmlFor="is_rework">Rework?</label>
      <input type="checkbox" name="is_rework" id="is_rework"  />
    </div>
    <div>
      <label htmlFor="products">Productos</label>
      <DropProducts/>
    </div>
    <div>
      <label htmlFor="rejection_causes">Causas de Rechazo</label>
      <DropRejection_Causes/>
    </div>
    <button type="submit">Enviar</button>
    </div>
  </form>
  );
};
export default TicketForm;
