import { useFetchRejection_causes } from "../../hooks/useRejection_causes";

import Select from 'react-select'

function DropRejection_Causes() {
  const { data, isLoading, error } = useFetchRejection_causes();  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
 
  let options = [{name:"Ninguna",uuid:"Ninguna",description:"Ninguna"}]
  options = options.concat(data.results)
  
  return (
    
    <Select 
      options={options}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.name}
      name="description"
      id="description"
      isMulti
      isSearchable
      isClearable
      ignoreCase={true}
      ignoreAccents={true}
      matchFrom="any"
      stingify={options.name}
      trim={true}
      />
  );
  }
   export default DropRejection_Causes;
