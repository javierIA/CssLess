import { useFetchProducts } from "../../hooks/useProducts";
import { Link } from "react-router-dom";

function ProductAdmin() {
  const { data, isLoading, error } = useFetchProducts();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);
  return (
   <div>
   <h1>Product Admin</h1>
   <Link to="/products/form">Create Product</Link>
   <table>
   <thead>
   <tr>
   <th>Name</th>
   <th>Part Number</th>
   <th>Rejection Causes</th>
   <th>Uuid</th>
   </tr>
   </thead>
   <tbody>
   {data.results.map((product) => (
   <tr key={product.uuid} >
   <td>{product.name}</td>
   <td>{product.part_number}</td>

   <td>{product.uuid}</td>
   </tr>
   ))}
   </tbody>
   </table>
   
     </div>
     );
   }
   export default ProductAdmin;
