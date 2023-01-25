import { useFetchrejection_causes } from "../../hooks/useRejection_causes";
import { Link } from "react-router-dom";
 
function DropRejection_Causes() {
  const { data, isLoading, error } = useFetchrejection_causes();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);
  return (
   <select  id="rejection_causes">
   {data.results.map((rejection_causes) => (
   <option key={rejection_causes.uuid} value={rejection_causes.name}>{rejection_causes.name}</option>
))}
   <option value="Ninguno" multiple>Sin caso de rechazo</option>
   </select>
     );
   }
   export default DropRejection_Causes;
