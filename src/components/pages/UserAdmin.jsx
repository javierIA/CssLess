import { useFetchUsers } from "../../hooks/useUsers";
import { Link } from "react-router-dom";
import { useDeleteUser  } from "../../hooks/useUsers";

function UserAdmin() {
  const { data, isLoading, error } = useFetchUsers();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);
  return (
    <div>
    <h1>User Admin</h1> 
    <Link to="/admin/form">Create User</Link>
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
              <button onClick={() => useDeleteUser.mutations(user.uuid)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default UserAdmin;
