import Api from "../services/Api";
import { useQuery, useMutation, useQueryClient } from "react-query";
async function fetchrejection_causes() {
  const { data } = await Api.get("/rejection_causes/");
  return data;
}
export const createRejection_causes = (rejection_causes) => Api.post("/rejection_causes/", rejection_causes);
export const updateRejection_causes = (rejection_causes) => Api.put(`/rejection_causes/${rejection_causes.uuid}/`, rejection_causes);
export const deleteRejection_causes = (rejection_causes) => Api.delete(`/rejection_causes/${rejection_causes.uuid}/`);
export const getRejection_causes = (uuid) => Api.get(`/rejection_causes/${uuid}/`);

export function useCreaterejection_causes() {
  const queryClient = useQueryClient();
  return useMutation({ mutationFn: createRejection_causes, onSuccess: () => queryClient.invalidateQueries("rejection_causess") ,
onError: (error) => { console.log(error); } });
}
export function useDeleterejection_causes(){
  const queryClient = useQueryClient();
  return useMutation({ mutationFn: deleteRejection_causes, onSuccess: () => queryClient.invalidateQueries("rejection_causess") ,
  onError: (error) => { console.log(error); } });
}
export function useUpdaterejection_causes() { 
  const queryClient = useQueryClient(); 
  return useMutation({ mutationFn: updateRejection_causes, onSuccess: () => queryClient.invalidateQueries("rejection_causess") ,  
  onError: (error) => { console.log(error); } });
}
export function useFetchrejection_causes() {
  return useQuery("rejection_causes", fetchrejection_causes, ); 
  
}
export function useFetchRejection_cause(uuid) {
  return useQuery(["rejection_causes", uuid], () => getRejection_causes(uuid));

}