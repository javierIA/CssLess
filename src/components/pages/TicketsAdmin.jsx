import { useFecthTickets } from "../../hooks/useTickets";
import { Link } from "react-router-dom";

function TicketAdmin() {
const { data, isLoading, error } = useFecthTickets();

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;
console.log(data);
return (

   <div>
   <h1>Ticket Admin</h1>
   <Link to="/tickets/form">Create Ticket</Link>
   <table>
   <thead>
   <tr>
   <th>Uuid</th>
   <th>Service Number</th>
   <th>Quote Number</th>
   <th>Billing Type</th>
   <th>Authorized Pieces</th>
   <th>Standard Time</th>
   <th>Authorized Hours</th>
   <th>Is Active</th>
   <th>In Pause</th>
   <th>Is Rework</th>
   <th>Products</th>
   <th>Rejection Causes</th>
   </tr>
   </thead>
   <tbody>
   {data.results.map((ticket) => (
   <tr key={ticket.uuid} >
   <td>{ticket.uuid}</td>
   <td>{ticket.service_number}</td>
   <td>{ticket.quote_number}</td>
<td>{ticket.billing_type}</td>
<td>{ticket.authorized_pieces}</td>
<td>{ticket.standard_time}</td>
<td>{ticket.authorized_hours}</td>
<td>{ticket.is_active ? "Yes" : "No"}</td>
<td>{ticket.in_pause ? "Yes" : "No"}</td>
<td>{ticket.is_rework ? "Yes" : "No"}</td>
<td>{ticket.products.map(product => product.name).join(", ")}</td>
<td>{ticket.rejection_causes.map(cause => cause.name).join(", ")}</td>
<td>{ticket.uuid}</td>
</tr>
))}
</tbody>
</table>
</div>
);
}
export default TicketAdmin;
