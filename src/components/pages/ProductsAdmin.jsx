import { useFetchProducts,useDeleteProduct } from "../../hooks/useProducts";
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component';


function ProductAdmin() {
  const { data, isLoading, error } = useFetchProducts();
  const { mutate: DeleteProduct } = useDeleteProduct();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  const columns = [
    {
      name: "Nombre",
      selector: (row) => (row.name),
      sortable: true,
      wrap: true,
      wordWrap: 'wrap'
    },
    {
      name: "Número de parte",
      selector: (row) => (row.part_number),
      sortable: true,
      wrap: true,
      wordWrap: 'wrap'
    },
    {
      name: "Descripción",
      selector: (row) => (row.description),
      sortable: true,
      wrap: true,
      wordWrap: 'wrap'
    },
    {
      name: 'Acciones',
      cell: (row) => (
        <>
        <button onClick={() => DeleteProduct(row)}>Borrar</button>
        <Link to={`/admin/products/form/${row.uuid}`}>
          <button>Actualizar</button>
        </Link>
      </>
      ),
    }
  ]

  return (
   <div>
   <h1>Product Admin</h1>
   <Link to="/admin/products/form">Crear nuevo producto</Link>
   <table>
   <thead>
   <tr>
   <th>Nombre</th>
   <th>Número de parte</th>
   <th>Descripción</th>
   </tr>
   </thead>
   <tbody>
   {data.map((product) => (
   <tr key={product.uuid} >

   <td>{product.name}</td>
   <td>{product.part_number}</td>
   <td>{product.description}</td>
    <td> 

    <button onClick={() => DeleteProduct(product)}>Borrar</button>
    <Link to={`/admin/products/form/${product.uuid}`}>
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
   export default ProductAdmin;
