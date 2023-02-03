import { useFetchrejection_causes,useDeleterejection_causes} from "../../hooks/useRejection_causes";
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component';


function RejectionAdmin() {
  const { data, isLoading, error } = useFetchrejection_causes();
  const { mutate: Deleterejection_causes } = useDeleterejection_causes();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);
  return (
   <div>
   <h1>Rejection Admin</h1>
   <Link to="/admin/rejection_causes/form">Crear Razón de rechazo</Link>
   <table>
   <thead>
   <tr>
   <th>Nombre</th>
   <th>Descripción</th>
   <th>Actions</th>
   </tr>
   </thead>
   <tbody>
   {data.map((rejection_causes) => (
   <tr key={rejection_causes.uuid} >
   <td>{rejection_causes.name}</td>
   <td>{rejection_causes.description}</td>
    <td> 

    <button onClick={() => Deleterejection_causes(rejection_causes)}>Borrar rechazo</button>
    <Link to={`/admin/rejection_causes/form/${rejection_causes.uuid}`}>
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
   export default RejectionAdmin;
