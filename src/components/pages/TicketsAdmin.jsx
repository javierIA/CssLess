import { useFecthTickets,useDeleteTicket} from "../../hooks/useTickets";
import { Link } from "react-router-dom";
import BoxAdmin from "./BoxAdmin";
import DataTable from 'react-data-table-component';

function TicketAdmin() {
const { data, isLoading, error } = useFecthTickets();
const {mutate: DeleteTicket} = useDeleteTicket();
if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;




return (

   <div>
   <h1>Tickets</h1>
   <Link to="/tickets/form">Crear tickets</Link>
   <table>
   <thead>
   <tr>
   <th>Numero </th>
   <th>Nota</th>
   <th>Tipo de cobro</th>
   <th>Piezas Autorizadas</th>
   <th>Tiempo estándar</th>
   <th>Horas Autorizadas</th>
   <th>Activo</th>
   <th>Re trabajo</th>
   <th>Productos</th>
   <th>Causas de Rechazo</th>
   <th>Cajas inspeccionadas</th>
   <th>Acciones</th>
   </tr>
   </thead>
   <tbody>
   {data.map((ticket) => (
   <tr key={ticket.uuid} >
   <td>{ticket.service_number}</td>
   <td>{ticket.quote_number}</td>
   <td>{ticket.billing_type}</td>
   <td>{ticket.authorized_pieces}</td>
   <td>{ticket.standard_time}</td>
   <td>{ticket.authorized_hours}</td>
   <td>{ticket.is_active ? "Si" : "No"}</td>
   <td>{ticket.is_rework ? "Si" : "No"}</td>
   <td>{ticket.products.map(product => product.name).join(", ")}</td>
   <td><Link to={`/tickets/boxes/${ticket.uuid}`}>BoxAdmin</Link>

      </td>
   <td>{ticket.rejection_causes.map(cause => cause.name).join(", ")}</td>
      <td>
      <button onClick={() => DeleteTicket(ticket)}>Delete</button>
      </td>
      
</tr>
))}
</tbody>
</table>
</div>
);
}
export default TicketAdmin;
