import { useFetchrejection_causes } from "../../hooks/useRejection_causes";
import { Link } from "react-router-dom";
 
function DropRejection_Causes() {
  const { data, isLoading, error } = useFetchrejection_causes();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
   <select name="Rejection_Causes" id="rejection_causes">
   {data.results.map((rejection_causes) => (
   <option value={rejection_causes.name} ></option>

   ))}
   <option value="Ninguno" multiple>Sin caso de rechazo</option>
   </select>
     );
   }
   export default DropRejection_Causes;
