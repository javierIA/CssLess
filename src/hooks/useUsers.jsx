import Api from "../services/Api";
import { useQuery, useMutation, useQueryClient } from "react-query";
async function fetchUsers() {
  const { data } = await Api.get("/user/");
  return data;
}
export const createUser = (user) => Api.post("/user/", user);
export const updateUser = (user) => Api.put(`/user/${user.uuid}/`, user);
export const deleteUser = (user) => Api.delete(`/user/${user.uuid}/`);
export const getUser = (uuid) => Api.get(`/user/${uuid}/`);

export function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation({ mutationFn: createUser, onSuccess: () => queryClient.invalidateQueries("users") ,
onError: (error) => { console.log(error); } });
}
export function useDeleteUser(){
  const queryClient = useQueryClient();
  return useMutation({ mutationFn: deleteUser, onSuccess: () => queryClient.invalidateQueries("users") ,
  onError: (error) => { console.log(error); } });
}
export function useUpdateUser() { 
  const queryClient = useQueryClient(); 
  return useMutation({ mutationFn: updateUser, onSuccess: () => queryClient.invalidateQueries("users") ,  
  onError: (error) => { console.log(error); } });
}
export function useFetchUsers() {
  return useQuery("users", fetchUsers,); 
  
}
