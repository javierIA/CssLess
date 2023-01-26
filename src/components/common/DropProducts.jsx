import { useFetchProducts } from "../../hooks/useProducts";
import { Link } from "react-router-dom";
import Select from 'react-select'
function DropProducts() {
  const { data, isLoading, error } = useFetchProducts();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <Select
      options={data.results}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.uuid}
      name="product"
      id="product"
      isMulti
      isSearchable
      isClearable
    />
     );
   }
   export default DropProducts;
