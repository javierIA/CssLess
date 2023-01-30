import { useFetchrejection_causes } from "../../hooks/useRejection_causes";
import {useFetchProducts} from "../../hooks/useProducts"
import { useFetchClients,useFetchClientLocations} from "../../hooks/UseClients";
import Select from 'react-select'
import React, { useState } from "react";

export function DropRejection_Causes() {
  const { data, isLoading, error } = useFetchrejection_causes();  
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

export function DropProducts() {
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


export function DropClients() {
     const { data, isLoading, error } = useFetchClients();
     const [selectedClientUuid, setSelectedClientUuid] = useState("Ninguno");
   
     if (isLoading) return <div>Loading...</div>;
     if (error) return <div>Error: {error.message}</div>;
     
     const changeClient = (e) => {
       setSelectedClientUuid(e.target.value);
     };
   
     return (
       <>
         <select 
           onChange={changeClient}
           name="client" 
           id="client">  
            <option value="Ninguno"  key="Ninguno" defaultValue="Ninguno">Ninguno</option>
           {data.results.map((client) => (
             <option key={client.uuid} value={client.uuid}>
               {client.name}
             </option>
           ))}
         </select>
         <DropLocations clientUuid={selectedClientUuid} />
       </>
     );
   }
   
   function DropLocations({ clientUuid = "Ninguno" }) {
      if (clientUuid === "Ninguno") return <div>Seleccione un cliente para ver sus locaciones</div>;
      if (clientUuid === "undefined") return <div>Seleccione un cliente para ver sus locaciones</div>;
      const { data, isLoading, error } = useFetchClientLocations(clientUuid);
      
      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Error: {error.message}</div>;
      if (!data) return <div>Error: no se obtuvo data</div>;
      if (data === undefined ) return <div>Seleccione un cliente para ver sus locaciones</div>;
      console.trace(data.data.results)
      return (
        <select name="location" id="location">
        {Object.values(data.data.results).map((location) => (  
          <option key={location.uuid} value={location.uuid}>
            {location.name}
          </option>
        ))}
      </select>
);
}

  