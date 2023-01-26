import { useFetchrejection_causes, useDeleterejection_causes, deleterejection_causes } from "../../hooks/useRejection_causes";
import { Link } from "react-router-dom";

function RejectionCausesAdmin() {
  const { data, isLoading, error } = useFetchrejection_causes();
  const { mutate: DeleteRejection} = useDeleterejection_causes();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);
  return (
   <div>
   <h1>Causas de rechazo Admin</h1>
   <Link to="/rejections/form">Agregar razón de rechazo</Link>
   <table>
   <thead>
   <tr>
   <th>Nombre</th>
   
   <th>Descripción</th>
   </tr>
   </thead>
   <tbody>
   {data.results.map((rejection) => (
   <tr key={rejection.uuid} >

   <td>{rejection.name}</td>
   <td>{rejection.description}</td>
   <td>
    <button onClick={() => DeleteRejection(rejection)}>Delete</button>
   </td>
   </tr>
   ))}
   </tbody>
   </table>
   
     </div>
     );
   }
   export default RejectionCausesAdmin;
