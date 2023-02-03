import { useFetchUsers ,useDeleteUser, useUpdateUser } from "../../hooks/useUsers";
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component';


function UserAdmin() {
  const { data, isLoading, error } = useFetchUsers();
  const {mutate:DeleteUser}= useDeleteUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const columns = [
    {
      name: 'Nombre',
      selector: (row) => row.username,
      sortable: true,
      wrap: true,
      wordWrap: 'wrap'

    },
    {
      name: 'Compañia',
      selector: (row) => row.company_name,
      sortable: true,
      wrap: true,
      wordWrap: 'wrap'
      
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
      wrap: true,
      wordWrap: 'wrap',
    },
    {
      name: 'Fecha de nacimiento',
      selector: (row) => row.date_birth,
      sortable: true,
      wrap: true,
      wordWrap: 'wrap'
    },
    {
      name: 'Alt Email',
      selector: (row) => row.email_alt,
      sortable: true,
      wrap:true,
      wordWrap: 'wrap'
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
      <Link to="/admin/users/form">Crear Usuario</Link>
      <DataTable
        title="Usuarios"
        columns={columns}
        data={data}
        pagination
      />
    </div>
  );
}

export default UserAdmin;
