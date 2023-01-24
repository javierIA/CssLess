import Api from "../services/Api";
import { useQuery, useMutation, useQueryClient } from "react-query";
async function fetchProducts() {
  const { data } = await Api.get("/product/");
  return data;
}
export const createProduct = (Product) => Api.post("/product/", Product);
export const updateProduct = (Product) => Api.put(`/product/${Product.uuid}/`, Product);
export const deleteProduct = (Product) => Api.delete(`/product/${Product.uuid}/`);
export const getProduct = (uuid) => Api.get(`product/${uuid}/`);

export function useCreateProduct() {
  const queryClient = useQueryClient();
  return useMutation({ mutationFn: createProduct, onSuccess: () => queryClient.invalidateQueries("Products") ,
onError: (error) => { console.log(error); } });
}
export function useDeleteProduct(){
  const queryClient = useQueryClient();
  return useMutation({ mutationFn: deleteProduct, onSuccess: () => queryClient.invalidateQueries("Products") ,
  onError: (error) => { console.log(error); } });
}
export function useUpdateProduct() { 
  const queryClient = useQueryClient(); 
  return useMutation({ mutationFn: updateProduct, onSuccess: () => queryClient.invalidateQueries("Products") ,  
  onError: (error) => { console.log(error); } });
}
export function useFetchProducts() {
  return useQuery("Products", fetchProducts,); 
  
}
