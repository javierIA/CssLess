import { useParams ,Link} from "react-router-dom";
import { useFecthBoxes } from "../../hooks/useTickets";
import React from "react";
export default function BoxAdmin() {
  //
  const { uuid } = useParams();
  console.log(uuid.toString());
  const { data, isLoading, error } = useFecthBoxes(uuid.toString());
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
   <div>
     <h1>Box</h1>
      
     <table>
       <thead>
       <tr>
        <th>Uuid</th>
        <th>Numero de Lote</th>
        <th>Numero de Serie</th>
        <th>Numero de Caja</th>
        <th>Fecha</th>
        <th>Hora de Inicio</th>
        <th>Hora de Finalización</th>
        <th>Piezas Verificadas</th>
        <th>Piezas Rechazadas</th>
        <th>Usuario</th>
        <th>Turno</th>
        <th>Detalles de Rechazo</th>
      </tr>
       </thead>
       <tbody>
         <tr>
           <td>{data.uuid}</td>
           <td>{data.lot_number}</td>
           <td>{data.serial_number}</td>
           <td>{data.box_number}</td>
           <td>{data.date}</td>
           <td>{data.time_start}</td>
           <td>{data.time_end}</td>
           <td>{data.pieces_verified}</td>
           <td>{data.pieces_rejected}</td>
           <td>{data.user}</td>
           <td>{data.shift}</td>
           <td>{data.rejected_details}</td>
         </tr>
       </tbody>
     </table>
   </div>
 );
}
