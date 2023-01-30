 import { useFetchrejection_causes } from "../../hooks/useRejection_causes";
 import {useFetchProducts} from "../../hooks/useProducts"
 import { useFetchClients,useFetchClientLocations} from "../../hooks/UseClients";
 import React, { useState } from "react";
 import {Field} from 'formik'

 export function DropRejection_Causes() {
   const { data, isLoading, error } = useFetchrejection_causes();  
   if (isLoading) return <div>Loading...</div>;
   if (error) return <div>Error: {error.message}</div>;
  
   let options = [{name:"Ninguna",uuid:"Ninguna",description:"Ninguna"}]
   options = options.concat(data.results)
   
   return (
     
     <Field id="rejection_causes" name="rejection_causes" as ="select" >
       {options.map((option) => (

         <option key={option.uuid} value={option.uuid}>
           {option.name}
         </option>
       ))}
     </Field>
   );
   }

 export function DropProducts() {
   const { data, isLoading, error } = useFetchProducts();
   
   if (isLoading) return <div>Loading...</div>;
   if (error) return <div>Error: {error.message}</div>;
   return (
     <Field id="products" name="products" as="select">
       {data.results.map((option) => (
        
         <option key={option.uuid} value={option.uuid}>
           {option.name}
         </option>
       ))}
     </Field>
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
        <label htmlFor="client">Cliente</label>
          <Field 
            onChange={changeClient}
            name="client" 
            id="client" as="select">  
            {data.results.map((client) => (
              <option key={client.uuid} value={client.uuid}>
                {client.name}
              </option>
            ))}
          </Field>
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
        <label htmlFor="service_location">Locación</label>,
         <Field name="service_location" id="service_location" as="select">
         {Object.values(data.data.results).map((location) => (  
           <option key={location.uuid} value={location.uuid}>
             {location.name}
           </option>
         ))}
       </Field>
 );
 }

export default DropClients;
