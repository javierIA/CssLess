import Api from "../services/Api";
import { useQuery, useMutation, useQueryClient } from "react-query";
async function fetchshifts() {
  const { data } = await Api.get("/shifts/");
  return data;
}
export const createshifts = (shifts) => Api.post("/shifts/", shifts);
export const updateshifts = (shifts) => Api.put(`/shifts/${shifts.uuid}/`, shifts);
export const deleteshifts = (shifts) => Api.delete(`/shifts/${shifts.uuid}/`);
export const getClient = (uuid) => Api.get(`shifts/${uuid}/`);
export const getClientLocations = (uuid) => Api.get(`shifts/${uuid}/locations/`);
export function useCreateshifts() {
  const queryClient = useQueryClient();
  return useMutation({ mutationFn: createshifts, onSuccess: () => queryClient.invalidateQueries("shifts") ,
onError: (error) => { console.log(error); } });
}
export function useDeleteshifts(){
  const queryClient = useQueryClient();
  return useMutation({ mutationFn: deleteshifts, onSuccess: () => queryClient.invalidateQueries("shifts") ,
  onError: (error) => { console.log(error); } });
}
export function useUpdateshifts() { 
  const queryClient = useQueryClient(); 
  return useMutation({ mutationFn: updateshifts, onSuccess: () => queryClient.invalidateQueries("shifts") ,  
  onError: (error) => { console.log(error); } });
}
export function useFetchshifts() {
  return useQuery("shifts", fetchshifts,); 
  
}
export function useFetchClientLocations(uuid) {
  return useQuery(["shifts", uuid], () => getClientLocations(uuid));
}

export function useFetchClient(uuid) {
  return useQuery(["shifts", uuid], () => getshifts(uuid));
}
