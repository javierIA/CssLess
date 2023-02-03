import { useFetchClients, useDeleteClient } from "../../hooks/UseClients";
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component';


function ClientsAdmin() {
  const { data, isLoading, error } = useFetchClients();
  const { mutate: DeleteClient } = useDeleteClient();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);

  const columns = [
    {
      name: 'Nombre',
      selector: (row) => row.name,
      sortable: true,
      wrap: true,
      wordWrap: 'wrap'

    },
    {
      name: 'Descripcion',
      selector: (row) => row.description,
      sortable: true,
      wrap: true,
      wordWrap: 'wrap'
      
    },
    {
      name: 'Locations',
      selector: (row) => row.locations.name,
      sortable: true,
      wrap: true,
      wordWrap: 'wrap',
    },
    {
      name: 'Acciones',
      cell: (row) => (
        <>
          <button onClick={() => DeleteUser(row)}>Borrar</button>
          <Link to={`/admin/users/form/${row.uuid}`}>
            <button>Actualizar</button>
          </Link>
        </>
      ),
    },
  ];

  return (
    <div>
    <h1>User Admin</h1>
    <Link to="/admin/clients/form">Crear cliente</Link>
    <DataTable
      title="Clientes"
      columns={columns}
      data={data}
      pagination
    />
  </div>
     );
   }
   export default ClientsAdmin;
