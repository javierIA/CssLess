import { useFetchUsers ,useDeleteUser, useUpdateUser } from "../../hooks/useUsers";
import { Link } from "react-router-dom";

function UserAdmin() {
  const { data, isLoading, error } = useFetchUsers();
  const {mutate:DeleteUser}= useDeleteUser();
  const {mutate: UpdateUser}= useUpdateUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);
  return (
    <div>
    <h1>User Admin</h1> 
    <Link to="/admin/form">Crear Usuario</Link>
    <table>

      <thead>
        <tr>
          <th>Name</th>
          <th>Company</th>
          <th>Email</th>
          <th>Birth Date</th>
          <th>Alt Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.results.map((user) => (
          <tr key={user.uuid} > 
            <td>{user.username}</td>
            <td>{user.company_name}</td>
            <td>{user.email}</td>
            <td>{user.date_birth}</td>
            <td>{user.email_alt}</td>
            <td>
              <button onClick={() => DeleteUser(user)}>Delete</button>
              <Link to={`/admin/form/${user.uuid}`}>
                <button>Actualizar</button>
              </Link>
            </td> 
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default UserAdmin;
