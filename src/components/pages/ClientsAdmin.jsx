import { useFetchClients ,useDeleteClients} from "../../hooks/UseClients";
import { Link } from "react-router-dom";

function ClientsAdmin() {
  const { data, isLoading, error } = useFetchClients();
  const { mutate:deleteClients } = useDeleteClients();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);
  return (
    <div>
      <h1>Clients Admin</h1>
      <Link to="/admin/clients/form">Create Clients</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Locations</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((clients) => (
            <tr key={clients.uuid}>
              <td>{clients.name}</td>
              <td>{clients.description}</td>
              <td>{clients.locations}</td>
              <td>
                {" "}
                <Link to={`/admin/clients/form/${clients.uuid}`}>
                  Edit
                </Link>{" "}
              </td>
              <td>
                {" "}
                <button onClick={() => deleteClients(clients)}>
                  Delete
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
   }
   export default ClientsAdmin;
