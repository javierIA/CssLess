import Api from "../services/Api";
import { useQuery, useMutation, useQueryClient } from "react-query";
async function fetchClients() {
  const { data } = await Api.get("/clients/");
  return data;
}
export const createClients = (Clients) => Api.post("/clients/", Clients);
export const updateClients = (Clients) => Api.put(`/clients/${Clients.uuid}/`, Clients);
export const deleteClients = (Clients) => Api.delete(`/clients/${Clients.uuid}/`);
export const getClients = (uuid) => Api.get(`clients/${uuid}/`);

export function useCreateClients() {
  const queryClient = useQueryClient();
  return useMutation({ mutationFn: createClients, onSuccess: () => queryClient.invalidateQueries("Clients") ,
onError: (error) => { console.log(error); } });
}
export function useDeleteClients(){
  const queryClient = useQueryClient();
  return useMutation({ mutationFn: deleteClients, onSuccess: () => queryClient.invalidateQueries("Clients") ,
  onError: (error) => { console.log(error); } });
}
export function useUpdateClients() { 
  const queryClient = useQueryClient(); 
  return useMutation({ mutationFn: updateClients, onSuccess: () => queryClient.invalidateQueries("Clients") ,  
  onError: (error) => { console.log(error); } });
}
export function useFetchClients() {
  return useQuery("Clients", fetchClients,); 
  
}
