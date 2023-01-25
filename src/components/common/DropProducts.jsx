import { useFetchProducts } from "../../hooks/useProducts";
import { Link } from "react-router-dom";
 
function DropProducts() {
  const { data, isLoading, error } = useFetchProducts();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
   <select name="DropProducts" id="DropProducts">
   {data.results.map((products) => (
   <option value={products.name} key={products.uuid} >
   {products.name}
   </option>

   ))}
   <option value="Ninguno" multiple>Sin</option>
   </select>
     );
   }
   export default DropProducts;
